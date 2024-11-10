import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FinancialAssistanceService } from "./financialAssistance.service";
import { FinancialAssistanceControllerBase } from "./base/financialAssistance.controller.base";

@swagger.ApiTags("financialAssistances")
@common.Controller("financialAssistances")
export class FinancialAssistanceController extends FinancialAssistanceControllerBase {
  constructor(
    protected readonly service: FinancialAssistanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
