import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FinancialAssistanceResolverBase } from "./base/financialAssistance.resolver.base";
import { FinancialAssistance } from "./base/FinancialAssistance";
import { FinancialAssistanceService } from "./financialAssistance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FinancialAssistance)
export class FinancialAssistanceResolver extends FinancialAssistanceResolverBase {
  constructor(
    protected readonly service: FinancialAssistanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
