
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
import { DailyActivity } from "./DailyActivity";
import { DailyActivityCountArgs } from "./DailyActivityCountArgs";
import { DailyActivityFindManyArgs } from "./DailyActivityFindManyArgs";
import { DailyActivityFindUniqueArgs } from "./DailyActivityFindUniqueArgs";
import { CreateDailyActivityArgs } from "./CreateDailyActivityArgs";
import { UpdateDailyActivityArgs } from "./UpdateDailyActivityArgs";
import { DeleteDailyActivityArgs } from "./DeleteDailyActivityArgs";
import { User } from "../../user/base/User";
import { DailyActivityService } from "../dailyActivity.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DailyActivity)
export class DailyActivityResolverBase {
  constructor(
    protected readonly service: DailyActivityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "read",
    possession: "any",
  })
  async _dailyActivitiesMeta(
    @graphql.Args() args: DailyActivityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DailyActivity])
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "read",
    possession: "any",
  })
  async dailyActivities(
    @graphql.Args() args: DailyActivityFindManyArgs
  ): Promise<DailyActivity[]> {
    return this.service.dailyActivities(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DailyActivity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "read",
    possession: "own",
  })
  async dailyActivity(
    @graphql.Args() args: DailyActivityFindUniqueArgs
  ): Promise<DailyActivity | null> {
    const result = await this.service.dailyActivity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DailyActivity)
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "create",
    possession: "any",
  })
  async createDailyActivity(
    @graphql.Args() args: CreateDailyActivityArgs
  ): Promise<DailyActivity> {
    return await this.service.createDailyActivity({
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
  @graphql.Mutation(() => DailyActivity)
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "update",
    possession: "any",
  })
  async updateDailyActivity(
    @graphql.Args() args: UpdateDailyActivityArgs
  ): Promise<DailyActivity | null> {
    try {
      return await this.service.updateDailyActivity({
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

  @graphql.Mutation(() => DailyActivity)
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "delete",
    possession: "any",
  })
  async deleteDailyActivity(
    @graphql.Args() args: DeleteDailyActivityArgs
  ): Promise<DailyActivity | null> {
    try {
      return await this.service.deleteDailyActivity(args);
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
  async getUser(@graphql.Parent() parent: DailyActivity): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
