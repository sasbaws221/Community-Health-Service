import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HealthActivityService } from "./healthActivity.service";
import { HealthActivityControllerBase } from "./base/healthActivity.controller.base";

@swagger.ApiTags("healthActivities")
@common.Controller("healthActivities")
export class HealthActivityController extends HealthActivityControllerBase {
  constructor(
    protected readonly service: HealthActivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
