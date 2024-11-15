
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MedicationOrderService } from "../medicationOrder.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MedicationOrderCreateInput } from "./MedicationOrderCreateInput";
import { MedicationOrder } from "./MedicationOrder";
import { MedicationOrderFindManyArgs } from "./MedicationOrderFindManyArgs";
import { MedicationOrderWhereUniqueInput } from "./MedicationOrderWhereUniqueInput";
import { MedicationOrderUpdateInput } from "./MedicationOrderUpdateInput";
import { MedicationFindManyArgs } from "../../medication/base/MedicationFindManyArgs";
import { Medication } from "../../medication/base/Medication";
import { MedicationWhereUniqueInput } from "../../medication/base/MedicationWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MedicationOrderControllerBase {
  constructor(
    protected readonly service: MedicationOrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MedicationOrder })
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMedicationOrder(
    @common.Body() data: MedicationOrderCreateInput
  ): Promise<MedicationOrder> {
    return await this.service.createMedicationOrder({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        deliveredAt: true,
        id: true,
        orderedAt: true,
        quantity: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MedicationOrder] })
  @ApiNestedQuery(MedicationOrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async medicationOrders(
    @common.Req() request: Request
  ): Promise<MedicationOrder[]> {
    const args = plainToClass(MedicationOrderFindManyArgs, request.query);
    return this.service.medicationOrders({
      ...args,
      select: {
        createdAt: true,
        deliveredAt: true,
        id: true,
        orderedAt: true,
        quantity: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MedicationOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async medicationOrder(
    @common.Param() params: MedicationOrderWhereUniqueInput
  ): Promise<MedicationOrder | null> {
    const result = await this.service.medicationOrder({
      where: params,
      select: {
        createdAt: true,
        deliveredAt: true,
        id: true,
        orderedAt: true,
        quantity: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MedicationOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMedicationOrder(
    @common.Param() params: MedicationOrderWhereUniqueInput,
    @common.Body() data: MedicationOrderUpdateInput
  ): Promise<MedicationOrder | null> {
    try {
      return await this.service.updateMedicationOrder({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          deliveredAt: true,
          id: true,
          orderedAt: true,
          quantity: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MedicationOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMedicationOrder(
    @common.Param() params: MedicationOrderWhereUniqueInput
  ): Promise<MedicationOrder | null> {
    try {
      return await this.service.deleteMedicationOrder({
        where: params,
        select: {
          createdAt: true,
          deliveredAt: true,
          id: true,
          orderedAt: true,
          quantity: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/medication")
  @ApiNestedQuery(MedicationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "read",
    possession: "any",
  })
  async findMedication(
    @common.Req() request: Request,
    @common.Param() params: MedicationOrderWhereUniqueInput
  ): Promise<Medication[]> {
    const query = plainToClass(MedicationFindManyArgs, request.query);
    const results = await this.service.findMedication(params.id, {
      ...query,
      select: {
        category: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        recommendedFor: true,
        sideEffects: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/medication")
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "update",
    possession: "any",
  })
  async connectMedication(
    @common.Param() params: MedicationOrderWhereUniqueInput,
    @common.Body() body: MedicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medication: {
        connect: body,
      },
    };
    await this.service.updateMedicationOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/medication")
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "update",
    possession: "any",
  })
  async updateMedication(
    @common.Param() params: MedicationOrderWhereUniqueInput,
    @common.Body() body: MedicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medication: {
        set: body,
      },
    };
    await this.service.updateMedicationOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/medication")
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "update",
    possession: "any",
  })
  async disconnectMedication(
    @common.Param() params: MedicationOrderWhereUniqueInput,
    @common.Body() body: MedicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medication: {
        disconnect: body,
      },
    };
    await this.service.updateMedicationOrder({
      where: params,
      data,
      select: { id: true },
    });
  }
}
