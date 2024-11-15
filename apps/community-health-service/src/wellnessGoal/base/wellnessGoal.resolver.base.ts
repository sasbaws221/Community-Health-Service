
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
import { WellnessGoal } from "./WellnessGoal";
import { WellnessGoalCountArgs } from "./WellnessGoalCountArgs";
import { WellnessGoalFindManyArgs } from "./WellnessGoalFindManyArgs";
import { WellnessGoalFindUniqueArgs } from "./WellnessGoalFindUniqueArgs";
import { CreateWellnessGoalArgs } from "./CreateWellnessGoalArgs";
import { UpdateWellnessGoalArgs } from "./UpdateWellnessGoalArgs";
import { DeleteWellnessGoalArgs } from "./DeleteWellnessGoalArgs";
import { User } from "../../user/base/User";
import { WellnessGoalService } from "../wellnessGoal.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WellnessGoal)
export class WellnessGoalResolverBase {
  constructor(
    protected readonly service: WellnessGoalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "read",
    possession: "any",
  })
  async _wellnessGoalsMeta(
    @graphql.Args() args: WellnessGoalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WellnessGoal])
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "read",
    possession: "any",
  })
  async wellnessGoals(
    @graphql.Args() args: WellnessGoalFindManyArgs
  ): Promise<WellnessGoal[]> {
    return this.service.wellnessGoals(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WellnessGoal, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "read",
    possession: "own",
  })
  async wellnessGoal(
    @graphql.Args() args: WellnessGoalFindUniqueArgs
  ): Promise<WellnessGoal | null> {
    const result = await this.service.wellnessGoal(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WellnessGoal)
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "create",
    possession: "any",
  })
  async createWellnessGoal(
    @graphql.Args() args: CreateWellnessGoalArgs
  ): Promise<WellnessGoal> {
    return await this.service.createWellnessGoal({
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
  @graphql.Mutation(() => WellnessGoal)
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "update",
    possession: "any",
  })
  async updateWellnessGoal(
    @graphql.Args() args: UpdateWellnessGoalArgs
  ): Promise<WellnessGoal | null> {
    try {
      return await this.service.updateWellnessGoal({
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

  @graphql.Mutation(() => WellnessGoal)
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "delete",
    possession: "any",
  })
  async deleteWellnessGoal(
    @graphql.Args() args: DeleteWellnessGoalArgs
  ): Promise<WellnessGoal | null> {
    try {
      return await this.service.deleteWellnessGoal(args);
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
  async getUser(@graphql.Parent() parent: WellnessGoal): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
