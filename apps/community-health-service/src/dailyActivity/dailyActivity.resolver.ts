import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DailyActivityResolverBase } from "./base/dailyActivity.resolver.base";
import { DailyActivity } from "./base/DailyActivity";
import { DailyActivityService } from "./dailyActivity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DailyActivity)
export class DailyActivityResolver extends DailyActivityResolverBase {
  constructor(
    protected readonly service: DailyActivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
