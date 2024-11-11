
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
import { MedicationOrder } from "./MedicationOrder";
import { MedicationOrderCountArgs } from "./MedicationOrderCountArgs";
import { MedicationOrderFindManyArgs } from "./MedicationOrderFindManyArgs";
import { MedicationOrderFindUniqueArgs } from "./MedicationOrderFindUniqueArgs";
import { CreateMedicationOrderArgs } from "./CreateMedicationOrderArgs";
import { UpdateMedicationOrderArgs } from "./UpdateMedicationOrderArgs";
import { DeleteMedicationOrderArgs } from "./DeleteMedicationOrderArgs";
import { MedicationFindManyArgs } from "../../medication/base/MedicationFindManyArgs";
import { Medication } from "../../medication/base/Medication";
import { User } from "../../user/base/User";
import { MedicationOrderService } from "../medicationOrder.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MedicationOrder)
export class MedicationOrderResolverBase {
  constructor(
    protected readonly service: MedicationOrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "read",
    possession: "any",
  })
  async _medicationOrdersMeta(
    @graphql.Args() args: MedicationOrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MedicationOrder])
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "read",
    possession: "any",
  })
  async medicationOrders(
    @graphql.Args() args: MedicationOrderFindManyArgs
  ): Promise<MedicationOrder[]> {
    return this.service.medicationOrders(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MedicationOrder, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "read",
    possession: "own",
  })
  async medicationOrder(
    @graphql.Args() args: MedicationOrderFindUniqueArgs
  ): Promise<MedicationOrder | null> {
    const result = await this.service.medicationOrder(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MedicationOrder)
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "create",
    possession: "any",
  })
  async createMedicationOrder(
    @graphql.Args() args: CreateMedicationOrderArgs
  ): Promise<MedicationOrder> {
    return await this.service.createMedicationOrder({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MedicationOrder)
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "update",
    possession: "any",
  })
  async updateMedicationOrder(
    @graphql.Args() args: UpdateMedicationOrderArgs
  ): Promise<MedicationOrder | null> {
    try {
      return await this.service.updateMedicationOrder({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => MedicationOrder)
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "delete",
    possession: "any",
  })
  async deleteMedicationOrder(
    @graphql.Args() args: DeleteMedicationOrderArgs
  ): Promise<MedicationOrder | null> {
    try {
      return await this.service.deleteMedicationOrder(args);
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
  @graphql.ResolveField(() => [Medication], { name: "medication" })
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "read",
    possession: "any",
  })
  async findMedication(
    @graphql.Parent() parent: MedicationOrder,
    @graphql.Args() args: MedicationFindManyArgs
  ): Promise<Medication[]> {
    const results = await this.service.findMedication(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(
    @graphql.Parent() parent: MedicationOrder
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
