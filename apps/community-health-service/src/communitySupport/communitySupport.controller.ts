import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CommunitySupportService } from "./communitySupport.service";
import { CommunitySupportControllerBase } from "./base/communitySupport.controller.base";

@swagger.ApiTags("communitySupports")
@common.Controller("communitySupports")
export class CommunitySupportController extends CommunitySupportControllerBase {
  constructor(
    protected readonly service: CommunitySupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
