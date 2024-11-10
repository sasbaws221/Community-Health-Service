import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiscussionService } from "./discussion.service";
import { DiscussionControllerBase } from "./base/discussion.controller.base";

@swagger.ApiTags("discussions")
@common.Controller("discussions")
export class DiscussionController extends DiscussionControllerBase {
  constructor(
    protected readonly service: DiscussionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
