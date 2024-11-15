
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { HealthActivity } from "./HealthActivity";
import { HealthActivityCountArgs } from "./HealthActivityCountArgs";
import { HealthActivityFindManyArgs } from "./HealthActivityFindManyArgs";
import { HealthActivityFindUniqueArgs } from "./HealthActivityFindUniqueArgs";
import { CreateHealthActivityArgs } from "./CreateHealthActivityArgs";
import { UpdateHealthActivityArgs } from "./UpdateHealthActivityArgs";
import { DeleteHealthActivityArgs } from "./DeleteHealthActivityArgs";
import { User } from "../../user/base/User";
import { HealthActivityService } from "../healthActivity.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HealthActivity)
export class HealthActivityResolverBase {
  constructor(
    protected readonly service: HealthActivityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "read",
    possession: "any",
  })
  async _healthActivitiesMeta(
    @graphql.Args() args: HealthActivityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [HealthActivity])
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "read",
    possession: "any",
  })
  async healthActivities(
    @graphql.Args() args: HealthActivityFindManyArgs
  ): Promise<HealthActivity[]> {
    return this.service.healthActivities(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => HealthActivity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "read",
    possession: "own",
  })
  async healthActivity(
    @graphql.Args() args: HealthActivityFindUniqueArgs
  ): Promise<HealthActivity | null> {
    const result = await this.service.healthActivity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HealthActivity)
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "create",
    possession: "any",
  })
  async createHealthActivity(
    @graphql.Args() args: CreateHealthActivityArgs
  ): Promise<HealthActivity> {
    return await this.service.createHealthActivity({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HealthActivity)
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "update",
    possession: "any",
  })
  async updateHealthActivity(
    @graphql.Args() args: UpdateHealthActivityArgs
  ): Promise<HealthActivity | null> {
    try {
      return await this.service.updateHealthActivity({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => HealthActivity)
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "delete",
    possession: "any",
  })
  async deleteHealthActivity(
    @graphql.Args() args: DeleteHealthActivityArgs
  ): Promise<HealthActivity | null> {
    try {
      return await this.service.deleteHealthActivity(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(
    @graphql.Parent() parent: HealthActivity
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
