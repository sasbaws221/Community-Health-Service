import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MedicationOrderService } from "./medicationOrder.service";
import { MedicationOrderControllerBase } from "./base/medicationOrder.controller.base";

@swagger.ApiTags("medicationOrders")
@common.Controller("medicationOrders")
export class MedicationOrderController extends MedicationOrderControllerBase {
  constructor(
    protected readonly service: MedicationOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
