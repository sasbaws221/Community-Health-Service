import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FinanceService } from "./finance.service";
import { FinanceControllerBase } from "./base/finance.controller.base";

@swagger.ApiTags("finances")
@common.Controller("finances")
export class FinanceController extends FinanceControllerBase {
  constructor(
    protected readonly service: FinanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
