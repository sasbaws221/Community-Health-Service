import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MedicationOrderResolverBase } from "./base/medicationOrder.resolver.base";
import { MedicationOrder } from "./base/MedicationOrder";
import { MedicationOrderService } from "./medicationOrder.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MedicationOrder)
export class MedicationOrderResolver extends MedicationOrderResolverBase {
  constructor(
    protected readonly service: MedicationOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
