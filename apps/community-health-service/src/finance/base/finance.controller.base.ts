
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FinanceService } from "../finance.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FinanceCreateInput } from "./FinanceCreateInput";
import { Finance } from "./Finance";
import { FinanceFindManyArgs } from "./FinanceFindManyArgs";
import { FinanceWhereUniqueInput } from "./FinanceWhereUniqueInput";
import { FinanceUpdateInput } from "./FinanceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FinanceControllerBase {
  constructor(
    protected readonly service: FinanceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Finance })
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFinance(
    @common.Body() data: FinanceCreateInput
  ): Promise<Finance> {
    return await this.service.createFinance({
      data: {
        ...data,

        financialAssistances: data.financialAssistances
          ? {
              connect: data.financialAssistances,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,

        financialAssistances: {
          select: {
            id: true,
          },
        },

        id: true,
        supportName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Finance] })
  @ApiNestedQuery(FinanceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async finances(@common.Req() request: Request): Promise<Finance[]> {
    const args = plainToClass(FinanceFindManyArgs, request.query);
    return this.service.finances({
      ...args,
      select: {
        createdAt: true,
        description: true,

        financialAssistances: {
          select: {
            id: true,
          },
        },

        id: true,
        supportName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Finance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async finance(
    @common.Param() params: FinanceWhereUniqueInput
  ): Promise<Finance | null> {
    const result = await this.service.finance({
      where: params,
      select: {
        createdAt: true,
        description: true,

        financialAssistances: {
          select: {
            id: true,
          },
        },

        id: true,
        supportName: true,
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
  @swagger.ApiOkResponse({ type: Finance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFinance(
    @common.Param() params: FinanceWhereUniqueInput,
    @common.Body() data: FinanceUpdateInput
  ): Promise<Finance | null> {
    try {
      return await this.service.updateFinance({
        where: params,
        data: {
          ...data,

          financialAssistances: data.financialAssistances
            ? {
                connect: data.financialAssistances,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,

          financialAssistances: {
            select: {
              id: true,
            },
          },

          id: true,
          supportName: true,
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
  @swagger.ApiOkResponse({ type: Finance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFinance(
    @common.Param() params: FinanceWhereUniqueInput
  ): Promise<Finance | null> {
    try {
      return await this.service.deleteFinance({
        where: params,
        select: {
          createdAt: true,
          description: true,

          financialAssistances: {
            select: {
              id: true,
            },
          },

          id: true,
          supportName: true,
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
}
