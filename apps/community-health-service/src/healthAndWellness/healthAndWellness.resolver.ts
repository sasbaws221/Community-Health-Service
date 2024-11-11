import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HealthAndWellnessResolverBase } from "./base/healthAndWellness.resolver.base";
import { HealthAndWellness } from "./base/HealthAndWellness";
import { HealthAndWellnessService } from "./healthAndWellness.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HealthAndWellness)
export class HealthAndWellnessResolver extends HealthAndWellnessResolverBase {
  constructor(
    protected readonly service: HealthAndWellnessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
