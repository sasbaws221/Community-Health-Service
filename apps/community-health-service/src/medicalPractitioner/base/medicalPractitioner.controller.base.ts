
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MedicalPractitionerService } from "../medicalPractitioner.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MedicalPractitionerCreateInput } from "./MedicalPractitionerCreateInput";
import { MedicalPractitioner } from "./MedicalPractitioner";
import { MedicalPractitionerFindManyArgs } from "./MedicalPractitionerFindManyArgs";
import { MedicalPractitionerWhereUniqueInput } from "./MedicalPractitionerWhereUniqueInput";
import { MedicalPractitionerUpdateInput } from "./MedicalPractitionerUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MedicalPractitionerControllerBase {
  constructor(
    protected readonly service: MedicalPractitionerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MedicalPractitioner })
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMedicalPractitioner(
    @common.Body() data: MedicalPractitionerCreateInput
  ): Promise<MedicalPractitioner> {
    return await this.service.createMedicalPractitioner({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        bio: true,
        contact: true,
        createdAt: true,
        id: true,
        licenseNumber: true,
        specialization: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        yearsOfExperience: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MedicalPractitioner] })
  @ApiNestedQuery(MedicalPractitionerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async medicalPractitioners(
    @common.Req() request: Request
  ): Promise<MedicalPractitioner[]> {
    const args = plainToClass(MedicalPractitionerFindManyArgs, request.query);
    return this.service.medicalPractitioners({
      ...args,
      select: {
        bio: true,
        contact: true,
        createdAt: true,
        id: true,
        licenseNumber: true,
        specialization: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        yearsOfExperience: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MedicalPractitioner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async medicalPractitioner(
    @common.Param() params: MedicalPractitionerWhereUniqueInput
  ): Promise<MedicalPractitioner | null> {
    const result = await this.service.medicalPractitioner({
      where: params,
      select: {
        bio: true,
        contact: true,
        createdAt: true,
        id: true,
        licenseNumber: true,
        specialization: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        yearsOfExperience: true,
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
  @swagger.ApiOkResponse({ type: MedicalPractitioner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMedicalPractitioner(
    @common.Param() params: MedicalPractitionerWhereUniqueInput,
    @common.Body() data: MedicalPractitionerUpdateInput
  ): Promise<MedicalPractitioner | null> {
    try {
      return await this.service.updateMedicalPractitioner({
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
          bio: true,
          contact: true,
          createdAt: true,
          id: true,
          licenseNumber: true,
          specialization: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          yearsOfExperience: true,
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
  @swagger.ApiOkResponse({ type: MedicalPractitioner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMedicalPractitioner(
    @common.Param() params: MedicalPractitionerWhereUniqueInput
  ): Promise<MedicalPractitioner | null> {
    try {
      return await this.service.deleteMedicalPractitioner({
        where: params,
        select: {
          bio: true,
          contact: true,
          createdAt: true,
          id: true,
          licenseNumber: true,
          specialization: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          yearsOfExperience: true,
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
}
