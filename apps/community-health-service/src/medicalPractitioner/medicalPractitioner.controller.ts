import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MedicalPractitionerService } from "./medicalPractitioner.service";
import { MedicalPractitionerControllerBase } from "./base/medicalPractitioner.controller.base";

@swagger.ApiTags("medicalPractitioners")
@common.Controller("medicalPractitioners")
export class MedicalPractitionerController extends MedicalPractitionerControllerBase {
  constructor(
    protected readonly service: MedicalPractitionerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
