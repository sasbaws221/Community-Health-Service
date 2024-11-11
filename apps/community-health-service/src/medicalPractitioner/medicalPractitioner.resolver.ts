import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MedicalPractitionerResolverBase } from "./base/medicalPractitioner.resolver.base";
import { MedicalPractitioner } from "./base/MedicalPractitioner";
import { MedicalPractitionerService } from "./medicalPractitioner.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MedicalPractitioner)
export class MedicalPractitionerResolver extends MedicalPractitionerResolverBase {
  constructor(
    protected readonly service: MedicalPractitionerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
