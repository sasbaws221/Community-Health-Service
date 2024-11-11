
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
import { Discussion } from "./Discussion";
import { DiscussionCountArgs } from "./DiscussionCountArgs";
import { DiscussionFindManyArgs } from "./DiscussionFindManyArgs";
import { DiscussionFindUniqueArgs } from "./DiscussionFindUniqueArgs";
import { CreateDiscussionArgs } from "./CreateDiscussionArgs";
import { UpdateDiscussionArgs } from "./UpdateDiscussionArgs";
import { DeleteDiscussionArgs } from "./DeleteDiscussionArgs";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { User } from "../../user/base/User";
import { DiscussionService } from "../discussion.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Discussion)
export class DiscussionResolverBase {
  constructor(
    protected readonly service: DiscussionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "read",
    possession: "any",
  })
  async _discussionsMeta(
    @graphql.Args() args: DiscussionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Discussion])
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "read",
    possession: "any",
  })
  async discussions(
    @graphql.Args() args: DiscussionFindManyArgs
  ): Promise<Discussion[]> {
    return this.service.discussions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Discussion, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "read",
    possession: "own",
  })
  async discussion(
    @graphql.Args() args: DiscussionFindUniqueArgs
  ): Promise<Discussion | null> {
    const result = await this.service.discussion(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Discussion)
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "create",
    possession: "any",
  })
  async createDiscussion(
    @graphql.Args() args: CreateDiscussionArgs
  ): Promise<Discussion> {
    return await this.service.createDiscussion({
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
  @graphql.Mutation(() => Discussion)
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "update",
    possession: "any",
  })
  async updateDiscussion(
    @graphql.Args() args: UpdateDiscussionArgs
  ): Promise<Discussion | null> {
    try {
      return await this.service.updateDiscussion({
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

  @graphql.Mutation(() => Discussion)
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "delete",
    possession: "any",
  })
  async deleteDiscussion(
    @graphql.Args() args: DeleteDiscussionArgs
  ): Promise<Discussion | null> {
    try {
      return await this.service.deleteDiscussion(args);
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
    @graphql.Parent() parent: Discussion,
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    const results = await this.service.findComment(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
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
  async getUser(@graphql.Parent() parent: Discussion): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
