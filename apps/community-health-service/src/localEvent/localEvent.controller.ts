import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LocalEventService } from "./localEvent.service";
import { LocalEventControllerBase } from "./base/localEvent.controller.base";

@swagger.ApiTags("localEvents")
@common.Controller("localEvents")
export class LocalEventController extends LocalEventControllerBase {
  constructor(
    protected readonly service: LocalEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
