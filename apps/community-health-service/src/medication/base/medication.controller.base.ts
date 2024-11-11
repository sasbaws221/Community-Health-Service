
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MedicationService } from "../medication.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MedicationCreateInput } from "./MedicationCreateInput";
import { Medication } from "./Medication";
import { MedicationFindManyArgs } from "./MedicationFindManyArgs";
import { MedicationWhereUniqueInput } from "./MedicationWhereUniqueInput";
import { MedicationUpdateInput } from "./MedicationUpdateInput";
import { MedicationOrderFindManyArgs } from "../../medicationOrder/base/MedicationOrderFindManyArgs";
import { MedicationOrder } from "../../medicationOrder/base/MedicationOrder";
import { MedicationOrderWhereUniqueInput } from "../../medicationOrder/base/MedicationOrderWhereUniqueInput";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MedicationControllerBase {
  constructor(
    protected readonly service: MedicationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Medication })
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMedication(
    @common.Body() data: MedicationCreateInput
  ): Promise<Medication> {
    return await this.service.createMedication({
      data: data,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Medication] })
  @ApiNestedQuery(MedicationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async medications(@common.Req() request: Request): Promise<Medication[]> {
    const args = plainToClass(MedicationFindManyArgs, request.query);
    return this.service.medications({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Medication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async medication(
    @common.Param() params: MedicationWhereUniqueInput
  ): Promise<Medication | null> {
    const result = await this.service.medication({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Medication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMedication(
    @common.Param() params: MedicationWhereUniqueInput,
    @common.Body() data: MedicationUpdateInput
  ): Promise<Medication | null> {
    try {
      return await this.service.updateMedication({
        where: params,
        data: data,
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
  @swagger.ApiOkResponse({ type: Medication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMedication(
    @common.Param() params: MedicationWhereUniqueInput
  ): Promise<Medication | null> {
    try {
      return await this.service.deleteMedication({
        where: params,
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
  @common.Get("/:id/medicationOrders")
  @ApiNestedQuery(MedicationOrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "read",
    possession: "any",
  })
  async findMedicationOrders(
    @common.Req() request: Request,
    @common.Param() params: MedicationWhereUniqueInput
  ): Promise<MedicationOrder[]> {
    const query = plainToClass(MedicationOrderFindManyArgs, request.query);
    const results = await this.service.findMedicationOrders(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/medicationOrders")
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "update",
    possession: "any",
  })
  async connectMedicationOrders(
    @common.Param() params: MedicationWhereUniqueInput,
    @common.Body() body: MedicationOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicationOrders: {
        connect: body,
      },
    };
    await this.service.updateMedication({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/medicationOrders")
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "update",
    possession: "any",
  })
  async updateMedicationOrders(
    @common.Param() params: MedicationWhereUniqueInput,
    @common.Body() body: MedicationOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicationOrders: {
        set: body,
      },
    };
    await this.service.updateMedication({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/medicationOrders")
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "update",
    possession: "any",
  })
  async disconnectMedicationOrders(
    @common.Param() params: MedicationWhereUniqueInput,
    @common.Body() body: MedicationOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicationOrders: {
        disconnect: body,
      },
    };
    await this.service.updateMedication({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/reviews")
  @ApiNestedQuery(ReviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findReviews(
    @common.Req() request: Request,
    @common.Param() params: MedicationWhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReviews(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        medication: {
          select: {
            id: true,
          },
        },

        productType: true,
        rating: true,
        review: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "update",
    possession: "any",
  })
  async connectReviews(
    @common.Param() params: MedicationWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        connect: body,
      },
    };
    await this.service.updateMedication({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "update",
    possession: "any",
  })
  async updateReviews(
    @common.Param() params: MedicationWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        set: body,
      },
    };
    await this.service.updateMedication({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "update",
    possession: "any",
  })
  async disconnectReviews(
    @common.Param() params: MedicationWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        disconnect: body,
      },
    };
    await this.service.updateMedication({
      where: params,
      data,
      select: { id: true },
    });
  }
}
