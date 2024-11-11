import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HealthActivityResolverBase } from "./base/healthActivity.resolver.base";
import { HealthActivity } from "./base/HealthActivity";
import { HealthActivityService } from "./healthActivity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HealthActivity)
export class HealthActivityResolver extends HealthActivityResolverBase {
  constructor(
    protected readonly service: HealthActivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
