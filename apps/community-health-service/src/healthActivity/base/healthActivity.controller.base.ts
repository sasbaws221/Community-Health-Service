
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HealthActivityService } from "../healthActivity.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HealthActivityCreateInput } from "./HealthActivityCreateInput";
import { HealthActivity } from "./HealthActivity";
import { HealthActivityFindManyArgs } from "./HealthActivityFindManyArgs";
import { HealthActivityWhereUniqueInput } from "./HealthActivityWhereUniqueInput";
import { HealthActivityUpdateInput } from "./HealthActivityUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HealthActivityControllerBase {
  constructor(
    protected readonly service: HealthActivityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HealthActivity })
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHealthActivity(
    @common.Body() data: HealthActivityCreateInput
  ): Promise<HealthActivity> {
    return await this.service.createHealthActivity({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        activity: true,
        activityDate: true,
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        note: true,
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
  @swagger.ApiOkResponse({ type: [HealthActivity] })
  @ApiNestedQuery(HealthActivityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async healthActivities(
    @common.Req() request: Request
  ): Promise<HealthActivity[]> {
    const args = plainToClass(HealthActivityFindManyArgs, request.query);
    return this.service.healthActivities({
      ...args,
      select: {
        activity: true,
        activityDate: true,
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        note: true,
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
  @swagger.ApiOkResponse({ type: HealthActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async healthActivity(
    @common.Param() params: HealthActivityWhereUniqueInput
  ): Promise<HealthActivity | null> {
    const result = await this.service.healthActivity({
      where: params,
      select: {
        activity: true,
        activityDate: true,
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        note: true,
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
  @swagger.ApiOkResponse({ type: HealthActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHealthActivity(
    @common.Param() params: HealthActivityWhereUniqueInput,
    @common.Body() data: HealthActivityUpdateInput
  ): Promise<HealthActivity | null> {
    try {
      return await this.service.updateHealthActivity({
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
          activity: true,
          activityDate: true,
          createdAt: true,
          description: true,
          duration: true,
          id: true,
          note: true,
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
  @swagger.ApiOkResponse({ type: HealthActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHealthActivity(
    @common.Param() params: HealthActivityWhereUniqueInput
  ): Promise<HealthActivity | null> {
    try {
      return await this.service.deleteHealthActivity({
        where: params,
        select: {
          activity: true,
          activityDate: true,
          createdAt: true,
          description: true,
          duration: true,
          id: true,
          note: true,
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
