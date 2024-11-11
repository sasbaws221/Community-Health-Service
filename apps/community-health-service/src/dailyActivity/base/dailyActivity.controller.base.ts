
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DailyActivityService } from "../dailyActivity.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DailyActivityCreateInput } from "./DailyActivityCreateInput";
import { DailyActivity } from "./DailyActivity";
import { DailyActivityFindManyArgs } from "./DailyActivityFindManyArgs";
import { DailyActivityWhereUniqueInput } from "./DailyActivityWhereUniqueInput";
import { DailyActivityUpdateInput } from "./DailyActivityUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DailyActivityControllerBase {
  constructor(
    protected readonly service: DailyActivityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DailyActivity })
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDailyActivity(
    @common.Body() data: DailyActivityCreateInput
  ): Promise<DailyActivity> {
    return await this.service.createDailyActivity({
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
        date: true,
        exercise: true,
        id: true,
        meals: true,
        mood: true,
        note: true,
        sleepHours: true,

        user: {
          select: {
            id: true,
          },
        },

        waterIntake: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DailyActivity] })
  @ApiNestedQuery(DailyActivityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dailyActivities(
    @common.Req() request: Request
  ): Promise<DailyActivity[]> {
    const args = plainToClass(DailyActivityFindManyArgs, request.query);
    return this.service.dailyActivities({
      ...args,
      select: {
        createdAt: true,
        date: true,
        exercise: true,
        id: true,
        meals: true,
        mood: true,
        note: true,
        sleepHours: true,

        user: {
          select: {
            id: true,
          },
        },

        waterIntake: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DailyActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dailyActivity(
    @common.Param() params: DailyActivityWhereUniqueInput
  ): Promise<DailyActivity | null> {
    const result = await this.service.dailyActivity({
      where: params,
      select: {
        createdAt: true,
        date: true,
        exercise: true,
        id: true,
        meals: true,
        mood: true,
        note: true,
        sleepHours: true,

        user: {
          select: {
            id: true,
          },
        },

        waterIntake: true,
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
  @swagger.ApiOkResponse({ type: DailyActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDailyActivity(
    @common.Param() params: DailyActivityWhereUniqueInput,
    @common.Body() data: DailyActivityUpdateInput
  ): Promise<DailyActivity | null> {
    try {
      return await this.service.updateDailyActivity({
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
          date: true,
          exercise: true,
          id: true,
          meals: true,
          mood: true,
          note: true,
          sleepHours: true,

          user: {
            select: {
              id: true,
            },
          },

          waterIntake: true,
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
  @swagger.ApiOkResponse({ type: DailyActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDailyActivity(
    @common.Param() params: DailyActivityWhereUniqueInput
  ): Promise<DailyActivity | null> {
    try {
      return await this.service.deleteDailyActivity({
        where: params,
        select: {
          createdAt: true,
          date: true,
          exercise: true,
          id: true,
          meals: true,
          mood: true,
          note: true,
          sleepHours: true,

          user: {
            select: {
              id: true,
            },
          },

          waterIntake: true,
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
