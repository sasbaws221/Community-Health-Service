/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
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
import { CommunitySupport } from "./CommunitySupport";
import { CommunitySupportCountArgs } from "./CommunitySupportCountArgs";
import { CommunitySupportFindManyArgs } from "./CommunitySupportFindManyArgs";
import { CommunitySupportFindUniqueArgs } from "./CommunitySupportFindUniqueArgs";
import { CreateCommunitySupportArgs } from "./CreateCommunitySupportArgs";
import { UpdateCommunitySupportArgs } from "./UpdateCommunitySupportArgs";
import { DeleteCommunitySupportArgs } from "./DeleteCommunitySupportArgs";
import { User } from "../../user/base/User";
import { CommunitySupportService } from "../communitySupport.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CommunitySupport)
export class CommunitySupportResolverBase {
  constructor(
    protected readonly service: CommunitySupportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CommunitySupport",
    action: "read",
    possession: "any",
  })
  async _communitySupportsMeta(
    @graphql.Args() args: CommunitySupportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CommunitySupport])
  @nestAccessControl.UseRoles({
    resource: "CommunitySupport",
    action: "read",
    possession: "any",
  })
  async communitySupports(
    @graphql.Args() args: CommunitySupportFindManyArgs
  ): Promise<CommunitySupport[]> {
    return this.service.communitySupports(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CommunitySupport, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CommunitySupport",
    action: "read",
    possession: "own",
  })
  async communitySupport(
    @graphql.Args() args: CommunitySupportFindUniqueArgs
  ): Promise<CommunitySupport | null> {
    const result = await this.service.communitySupport(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CommunitySupport)
  @nestAccessControl.UseRoles({
    resource: "CommunitySupport",
    action: "create",
    possession: "any",
  })
  async createCommunitySupport(
    @graphql.Args() args: CreateCommunitySupportArgs
  ): Promise<CommunitySupport> {
    return await this.service.createCommunitySupport({
      ...args,
      data: {
        ...args.data,

        sender: args.data.sender
          ? {
              connect: args.data.sender,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CommunitySupport)
  @nestAccessControl.UseRoles({
    resource: "CommunitySupport",
    action: "update",
    possession: "any",
  })
  async updateCommunitySupport(
    @graphql.Args() args: UpdateCommunitySupportArgs
  ): Promise<CommunitySupport | null> {
    try {
      return await this.service.updateCommunitySupport({
        ...args,
        data: {
          ...args.data,

          sender: args.data.sender
            ? {
                connect: args.data.sender,
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

  @graphql.Mutation(() => CommunitySupport)
  @nestAccessControl.UseRoles({
    resource: "CommunitySupport",
    action: "delete",
    possession: "any",
  })
  async deleteCommunitySupport(
    @graphql.Args() args: DeleteCommunitySupportArgs
  ): Promise<CommunitySupport | null> {
    try {
      return await this.service.deleteCommunitySupport(args);
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
    name: "sender",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getSender(
    @graphql.Parent() parent: CommunitySupport
  ): Promise<User | null> {
    const result = await this.service.getSender(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}