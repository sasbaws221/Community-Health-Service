
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { WellnessGoalService } from "../wellnessGoal.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WellnessGoalCreateInput } from "./WellnessGoalCreateInput";
import { WellnessGoal } from "./WellnessGoal";
import { WellnessGoalFindManyArgs } from "./WellnessGoalFindManyArgs";
import { WellnessGoalWhereUniqueInput } from "./WellnessGoalWhereUniqueInput";
import { WellnessGoalUpdateInput } from "./WellnessGoalUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WellnessGoalControllerBase {
  constructor(
    protected readonly service: WellnessGoalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WellnessGoal })
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createWellnessGoal(
    @common.Body() data: WellnessGoalCreateInput
  ): Promise<WellnessGoal> {
    return await this.service.createWellnessGoal({
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
        currentProgress: true,
        endDate: true,
        frequency: true,
        goal: true,
        id: true,
        startDate: true,
        status: true,
        targetValue: true,
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
  @swagger.ApiOkResponse({ type: [WellnessGoal] })
  @ApiNestedQuery(WellnessGoalFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wellnessGoals(@common.Req() request: Request): Promise<WellnessGoal[]> {
    const args = plainToClass(WellnessGoalFindManyArgs, request.query);
    return this.service.wellnessGoals({
      ...args,
      select: {
        createdAt: true,
        currentProgress: true,
        endDate: true,
        frequency: true,
        goal: true,
        id: true,
        startDate: true,
        status: true,
        targetValue: true,
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
  @swagger.ApiOkResponse({ type: WellnessGoal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async wellnessGoal(
    @common.Param() params: WellnessGoalWhereUniqueInput
  ): Promise<WellnessGoal | null> {
    const result = await this.service.wellnessGoal({
      where: params,
      select: {
        createdAt: true,
        currentProgress: true,
        endDate: true,
        frequency: true,
        goal: true,
        id: true,
        startDate: true,
        status: true,
        targetValue: true,
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
  @swagger.ApiOkResponse({ type: WellnessGoal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateWellnessGoal(
    @common.Param() params: WellnessGoalWhereUniqueInput,
    @common.Body() data: WellnessGoalUpdateInput
  ): Promise<WellnessGoal | null> {
    try {
      return await this.service.updateWellnessGoal({
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
          currentProgress: true,
          endDate: true,
          frequency: true,
          goal: true,
          id: true,
          startDate: true,
          status: true,
          targetValue: true,
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
  @swagger.ApiOkResponse({ type: WellnessGoal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWellnessGoal(
    @common.Param() params: WellnessGoalWhereUniqueInput
  ): Promise<WellnessGoal | null> {
    try {
      return await this.service.deleteWellnessGoal({
        where: params,
        select: {
          createdAt: true,
          currentProgress: true,
          endDate: true,
          frequency: true,
          goal: true,
          id: true,
          startDate: true,
          status: true,
          targetValue: true,
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
