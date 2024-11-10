import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DailyActivityService } from "./dailyActivity.service";
import { DailyActivityControllerBase } from "./base/dailyActivity.controller.base";

@swagger.ApiTags("dailyActivities")
@common.Controller("dailyActivities")
export class DailyActivityController extends DailyActivityControllerBase {
  constructor(
    protected readonly service: DailyActivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
