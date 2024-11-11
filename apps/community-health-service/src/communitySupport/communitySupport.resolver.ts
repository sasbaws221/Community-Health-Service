import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CommunitySupportResolverBase } from "./base/communitySupport.resolver.base";
import { CommunitySupport } from "./base/CommunitySupport";
import { CommunitySupportService } from "./communitySupport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CommunitySupport)
export class CommunitySupportResolver extends CommunitySupportResolverBase {
  constructor(
    protected readonly service: CommunitySupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
