import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HealthAndWellnessService } from "./healthAndWellness.service";
import { HealthAndWellnessControllerBase } from "./base/healthAndWellness.controller.base";

@swagger.ApiTags("healthAndWellnesses")
@common.Controller("healthAndWellnesses")
export class HealthAndWellnessController extends HealthAndWellnessControllerBase {
  constructor(
    protected readonly service: HealthAndWellnessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
