
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
import { ResourcesAndAdvice } from "./ResourcesAndAdvice";
import { ResourcesAndAdviceCountArgs } from "./ResourcesAndAdviceCountArgs";
import { ResourcesAndAdviceFindManyArgs } from "./ResourcesAndAdviceFindManyArgs";
import { ResourcesAndAdviceFindUniqueArgs } from "./ResourcesAndAdviceFindUniqueArgs";
import { CreateResourcesAndAdviceArgs } from "./CreateResourcesAndAdviceArgs";
import { UpdateResourcesAndAdviceArgs } from "./UpdateResourcesAndAdviceArgs";
import { DeleteResourcesAndAdviceArgs } from "./DeleteResourcesAndAdviceArgs";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { Category } from "../../category/base/Category";
import { ResourcesAndAdviceService } from "../resourcesAndAdvice.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ResourcesAndAdvice)
export class ResourcesAndAdviceResolverBase {
  constructor(
    protected readonly service: ResourcesAndAdviceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ResourcesAndAdvice",
    action: "read",
    possession: "any",
  })
  async _resourcesAndAdvicesMeta(
    @graphql.Args() args: ResourcesAndAdviceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ResourcesAndAdvice])
  @nestAccessControl.UseRoles({
    resource: "ResourcesAndAdvice",
    action: "read",
    possession: "any",
  })
  async resourcesAndAdvices(
    @graphql.Args() args: ResourcesAndAdviceFindManyArgs
  ): Promise<ResourcesAndAdvice[]> {
    return this.service.resourcesAndAdvices(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ResourcesAndAdvice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ResourcesAndAdvice",
    action: "read",
    possession: "own",
  })
  async resourcesAndAdvice(
    @graphql.Args() args: ResourcesAndAdviceFindUniqueArgs
  ): Promise<ResourcesAndAdvice | null> {
    const result = await this.service.resourcesAndAdvice(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ResourcesAndAdvice)
  @nestAccessControl.UseRoles({
    resource: "ResourcesAndAdvice",
    action: "create",
    possession: "any",
  })
  async createResourcesAndAdvice(
    @graphql.Args() args: CreateResourcesAndAdviceArgs
  ): Promise<ResourcesAndAdvice> {
    return await this.service.createResourcesAndAdvice({
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
  @graphql.Mutation(() => ResourcesAndAdvice)
  @nestAccessControl.UseRoles({
    resource: "ResourcesAndAdvice",
    action: "update",
    possession: "any",
  })
  async updateResourcesAndAdvice(
    @graphql.Args() args: UpdateResourcesAndAdviceArgs
  ): Promise<ResourcesAndAdvice | null> {
    try {
      return await this.service.updateResourcesAndAdvice({
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

  @graphql.Mutation(() => ResourcesAndAdvice)
  @nestAccessControl.UseRoles({
    resource: "ResourcesAndAdvice",
    action: "delete",
    possession: "any",
  })
  async deleteResourcesAndAdvice(
    @graphql.Args() args: DeleteResourcesAndAdviceArgs
  ): Promise<ResourcesAndAdvice | null> {
    try {
      return await this.service.deleteResourcesAndAdvice(args);
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
    @graphql.Parent() parent: ResourcesAndAdvice,
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
    @graphql.Parent() parent: ResourcesAndAdvice,
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
    @graphql.Parent() parent: ResourcesAndAdvice
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
