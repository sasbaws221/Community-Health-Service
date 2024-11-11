import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ResourcesAndAdviceResolverBase } from "./base/resourcesAndAdvice.resolver.base";
import { ResourcesAndAdvice } from "./base/ResourcesAndAdvice";
import { ResourcesAndAdviceService } from "./resourcesAndAdvice.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ResourcesAndAdvice)
export class ResourcesAndAdviceResolver extends ResourcesAndAdviceResolverBase {
  constructor(
    protected readonly service: ResourcesAndAdviceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
