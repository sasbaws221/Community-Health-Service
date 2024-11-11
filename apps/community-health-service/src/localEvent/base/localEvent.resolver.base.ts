
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
import { LocalEvent } from "./LocalEvent";
import { LocalEventCountArgs } from "./LocalEventCountArgs";
import { LocalEventFindManyArgs } from "./LocalEventFindManyArgs";
import { LocalEventFindUniqueArgs } from "./LocalEventFindUniqueArgs";
import { CreateLocalEventArgs } from "./CreateLocalEventArgs";
import { UpdateLocalEventArgs } from "./UpdateLocalEventArgs";
import { DeleteLocalEventArgs } from "./DeleteLocalEventArgs";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { LocalEventService } from "../localEvent.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LocalEvent)
export class LocalEventResolverBase {
  constructor(
    protected readonly service: LocalEventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "read",
    possession: "any",
  })
  async _localEventsMeta(
    @graphql.Args() args: LocalEventCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LocalEvent])
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "read",
    possession: "any",
  })
  async localEvents(
    @graphql.Args() args: LocalEventFindManyArgs
  ): Promise<LocalEvent[]> {
    return this.service.localEvents(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LocalEvent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "read",
    possession: "own",
  })
  async localEvent(
    @graphql.Args() args: LocalEventFindUniqueArgs
  ): Promise<LocalEvent | null> {
    const result = await this.service.localEvent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LocalEvent)
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "create",
    possession: "any",
  })
  async createLocalEvent(
    @graphql.Args() args: CreateLocalEventArgs
  ): Promise<LocalEvent> {
    return await this.service.createLocalEvent({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LocalEvent)
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "update",
    possession: "any",
  })
  async updateLocalEvent(
    @graphql.Args() args: UpdateLocalEventArgs
  ): Promise<LocalEvent | null> {
    try {
      return await this.service.updateLocalEvent({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => LocalEvent)
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "delete",
    possession: "any",
  })
  async deleteLocalEvent(
    @graphql.Args() args: DeleteLocalEventArgs
  ): Promise<LocalEvent | null> {
    try {
      return await this.service.deleteLocalEvent(args);
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
    @graphql.Parent() parent: LocalEvent,
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
    @graphql.Parent() parent: LocalEvent,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUser(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
