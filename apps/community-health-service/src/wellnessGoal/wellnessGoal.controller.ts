import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WellnessGoalService } from "./wellnessGoal.service";
import { WellnessGoalControllerBase } from "./base/wellnessGoal.controller.base";

@swagger.ApiTags("wellnessGoals")
@common.Controller("wellnessGoals")
export class WellnessGoalController extends WellnessGoalControllerBase {
  constructor(
    protected readonly service: WellnessGoalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
