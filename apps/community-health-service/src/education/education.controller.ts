import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EducationService } from "./education.service";
import { EducationControllerBase } from "./base/education.controller.base";

@swagger.ApiTags("educations")
@common.Controller("educations")
export class EducationController extends EducationControllerBase {
  constructor(
    protected readonly service: EducationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
