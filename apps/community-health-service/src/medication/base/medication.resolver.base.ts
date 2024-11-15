
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Medication } from "./Medication";
import { MedicationCountArgs } from "./MedicationCountArgs";
import { MedicationFindManyArgs } from "./MedicationFindManyArgs";
import { MedicationFindUniqueArgs } from "./MedicationFindUniqueArgs";
import { CreateMedicationArgs } from "./CreateMedicationArgs";
import { UpdateMedicationArgs } from "./UpdateMedicationArgs";
import { DeleteMedicationArgs } from "./DeleteMedicationArgs";
import { MedicationOrderFindManyArgs } from "../../medicationOrder/base/MedicationOrderFindManyArgs";
import { MedicationOrder } from "../../medicationOrder/base/MedicationOrder";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { MedicationService } from "../medication.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Medication)
export class MedicationResolverBase {
  constructor(
    protected readonly service: MedicationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "read",
    possession: "any",
  })
  async _medicationsMeta(
    @graphql.Args() args: MedicationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Medication])
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "read",
    possession: "any",
  })
  async medications(
    @graphql.Args() args: MedicationFindManyArgs
  ): Promise<Medication[]> {
    return this.service.medications(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Medication, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "read",
    possession: "own",
  })
  async medication(
    @graphql.Args() args: MedicationFindUniqueArgs
  ): Promise<Medication | null> {
    const result = await this.service.medication(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Medication)
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "create",
    possession: "any",
  })
  async createMedication(
    @graphql.Args() args: CreateMedicationArgs
  ): Promise<Medication> {
    return await this.service.createMedication({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Medication)
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "update",
    possession: "any",
  })
  async updateMedication(
    @graphql.Args() args: UpdateMedicationArgs
  ): Promise<Medication | null> {
    try {
      return await this.service.updateMedication({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Medication)
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "delete",
    possession: "any",
  })
  async deleteMedication(
    @graphql.Args() args: DeleteMedicationArgs
  ): Promise<Medication | null> {
    try {
      return await this.service.deleteMedication(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MedicationOrder], { name: "medicationOrders" })
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "read",
    possession: "any",
  })
  async findMedicationOrders(
    @graphql.Parent() parent: Medication,
    @graphql.Args() args: MedicationOrderFindManyArgs
  ): Promise<MedicationOrder[]> {
    const results = await this.service.findMedicationOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Review], { name: "reviews" })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findReviews(
    @graphql.Parent() parent: Medication,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
