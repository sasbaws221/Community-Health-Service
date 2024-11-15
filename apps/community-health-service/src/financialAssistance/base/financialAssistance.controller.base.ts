
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FinancialAssistanceService } from "../financialAssistance.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FinancialAssistanceCreateInput } from "./FinancialAssistanceCreateInput";
import { FinancialAssistance } from "./FinancialAssistance";
import { FinancialAssistanceFindManyArgs } from "./FinancialAssistanceFindManyArgs";
import { FinancialAssistanceWhereUniqueInput } from "./FinancialAssistanceWhereUniqueInput";
import { FinancialAssistanceUpdateInput } from "./FinancialAssistanceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FinancialAssistanceControllerBase {
  constructor(
    protected readonly service: FinancialAssistanceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FinancialAssistance })
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFinancialAssistance(
    @common.Body() data: FinancialAssistanceCreateInput
  ): Promise<FinancialAssistance> {
    return await this.service.createFinancialAssistance({
      data: {
        ...data,

        supportType: data.supportType
          ? {
              connect: data.supportType,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        adminComments: true,
        amount: true,
        createdAt: true,
        description: true,
        id: true,
        status: true,

        supportType: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: [FinancialAssistance] })
  @ApiNestedQuery(FinancialAssistanceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async financialAssistances(
    @common.Req() request: Request
  ): Promise<FinancialAssistance[]> {
    const args = plainToClass(FinancialAssistanceFindManyArgs, request.query);
    return this.service.financialAssistances({
      ...args,
      select: {
        adminComments: true,
        amount: true,
        createdAt: true,
        description: true,
        id: true,
        status: true,

        supportType: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: FinancialAssistance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async financialAssistance(
    @common.Param() params: FinancialAssistanceWhereUniqueInput
  ): Promise<FinancialAssistance | null> {
    const result = await this.service.financialAssistance({
      where: params,
      select: {
        adminComments: true,
        amount: true,
        createdAt: true,
        description: true,
        id: true,
        status: true,

        supportType: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: FinancialAssistance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFinancialAssistance(
    @common.Param() params: FinancialAssistanceWhereUniqueInput,
    @common.Body() data: FinancialAssistanceUpdateInput
  ): Promise<FinancialAssistance | null> {
    try {
      return await this.service.updateFinancialAssistance({
        where: params,
        data: {
          ...data,

          supportType: data.supportType
            ? {
                connect: data.supportType,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          adminComments: true,
          amount: true,
          createdAt: true,
          description: true,
          id: true,
          status: true,

          supportType: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: FinancialAssistance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFinancialAssistance(
    @common.Param() params: FinancialAssistanceWhereUniqueInput
  ): Promise<FinancialAssistance | null> {
    try {
      return await this.service.deleteFinancialAssistance({
        where: params,
        select: {
          adminComments: true,
          amount: true,
          createdAt: true,
          description: true,
          id: true,
          status: true,

          supportType: {
            select: {
              id: true,
            },
          },

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
}
