import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResourcesAndAdviceService } from "./resourcesAndAdvice.service";
import { ResourcesAndAdviceControllerBase } from "./base/resourcesAndAdvice.controller.base";

@swagger.ApiTags("resourcesAndAdvices")
@common.Controller("resourcesAndAdvices")
export class ResourcesAndAdviceController extends ResourcesAndAdviceControllerBase {
  constructor(
    protected readonly service: ResourcesAndAdviceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
