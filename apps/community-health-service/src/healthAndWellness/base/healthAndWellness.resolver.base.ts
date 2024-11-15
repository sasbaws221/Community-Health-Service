
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
import { HealthAndWellness } from "./HealthAndWellness";
import { HealthAndWellnessCountArgs } from "./HealthAndWellnessCountArgs";
import { HealthAndWellnessFindManyArgs } from "./HealthAndWellnessFindManyArgs";
import { HealthAndWellnessFindUniqueArgs } from "./HealthAndWellnessFindUniqueArgs";
import { CreateHealthAndWellnessArgs } from "./CreateHealthAndWellnessArgs";
import { UpdateHealthAndWellnessArgs } from "./UpdateHealthAndWellnessArgs";
import { DeleteHealthAndWellnessArgs } from "./DeleteHealthAndWellnessArgs";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { Category } from "../../category/base/Category";
import { HealthAndWellnessService } from "../healthAndWellness.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HealthAndWellness)
export class HealthAndWellnessResolverBase {
  constructor(
    protected readonly service: HealthAndWellnessService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "read",
    possession: "any",
  })
  async _healthAndWellnessesMeta(
    @graphql.Args() args: HealthAndWellnessCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [HealthAndWellness])
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "read",
    possession: "any",
  })
  async healthAndWellnesses(
    @graphql.Args() args: HealthAndWellnessFindManyArgs
  ): Promise<HealthAndWellness[]> {
    return this.service.healthAndWellnesses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => HealthAndWellness, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "read",
    possession: "own",
  })
  async healthAndWellness(
    @graphql.Args() args: HealthAndWellnessFindUniqueArgs
  ): Promise<HealthAndWellness | null> {
    const result = await this.service.healthAndWellness(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HealthAndWellness)
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "create",
    possession: "any",
  })
  async createHealthAndWellness(
    @graphql.Args() args: CreateHealthAndWellnessArgs
  ): Promise<HealthAndWellness> {
    return await this.service.createHealthAndWellness({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HealthAndWellness)
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "update",
    possession: "any",
  })
  async updateHealthAndWellness(
    @graphql.Args() args: UpdateHealthAndWellnessArgs
  ): Promise<HealthAndWellness | null> {
    try {
      return await this.service.updateHealthAndWellness({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
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

  @graphql.Mutation(() => HealthAndWellness)
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "delete",
    possession: "any",
  })
  async deleteHealthAndWellness(
    @graphql.Args() args: DeleteHealthAndWellnessArgs
  ): Promise<HealthAndWellness | null> {
    try {
      return await this.service.deleteHealthAndWellness(args);
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
  @graphql.ResolveField(() => [Comment], { name: "comment" })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async findComment(
    @graphql.Parent() parent: HealthAndWellness,
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    const results = await this.service.findComment(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User], { name: "user" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUser(
    @graphql.Parent() parent: HealthAndWellness,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUser(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async getCategory(
    @graphql.Parent() parent: HealthAndWellness
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
