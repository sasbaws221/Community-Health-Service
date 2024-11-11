
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HealthAndWellnessService } from "../healthAndWellness.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HealthAndWellnessCreateInput } from "./HealthAndWellnessCreateInput";
import { HealthAndWellness } from "./HealthAndWellness";
import { HealthAndWellnessFindManyArgs } from "./HealthAndWellnessFindManyArgs";
import { HealthAndWellnessWhereUniqueInput } from "./HealthAndWellnessWhereUniqueInput";
import { HealthAndWellnessUpdateInput } from "./HealthAndWellnessUpdateInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HealthAndWellnessControllerBase {
  constructor(
    protected readonly service: HealthAndWellnessService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HealthAndWellness })
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHealthAndWellness(
    @common.Body() data: HealthAndWellnessCreateInput
  ): Promise<HealthAndWellness> {
    return await this.service.createHealthAndWellness({
      data: {
        ...data,

        category: data.category
          ? {
              connect: data.category,
            }
          : undefined,
      },
      select: {
        category: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        tags: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [HealthAndWellness] })
  @ApiNestedQuery(HealthAndWellnessFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async healthAndWellnesses(
    @common.Req() request: Request
  ): Promise<HealthAndWellness[]> {
    const args = plainToClass(HealthAndWellnessFindManyArgs, request.query);
    return this.service.healthAndWellnesses({
      ...args,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        tags: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: HealthAndWellness })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async healthAndWellness(
    @common.Param() params: HealthAndWellnessWhereUniqueInput
  ): Promise<HealthAndWellness | null> {
    const result = await this.service.healthAndWellness({
      where: params,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        tags: true,
        title: true,
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
  @swagger.ApiOkResponse({ type: HealthAndWellness })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHealthAndWellness(
    @common.Param() params: HealthAndWellnessWhereUniqueInput,
    @common.Body() data: HealthAndWellnessUpdateInput
  ): Promise<HealthAndWellness | null> {
    try {
      return await this.service.updateHealthAndWellness({
        where: params,
        data: {
          ...data,

          category: data.category
            ? {
                connect: data.category,
              }
            : undefined,
        },
        select: {
          category: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          tags: true,
          title: true,
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
  @swagger.ApiOkResponse({ type: HealthAndWellness })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHealthAndWellness(
    @common.Param() params: HealthAndWellnessWhereUniqueInput
  ): Promise<HealthAndWellness | null> {
    try {
      return await this.service.deleteHealthAndWellness({
        where: params,
        select: {
          category: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          tags: true,
          title: true,
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
  @common.Get("/:id/comment")
  @ApiNestedQuery(CommentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async findComment(
    @common.Req() request: Request,
    @common.Param() params: HealthAndWellnessWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComment(params.id, {
      ...query,
      select: {
        comments: true,
        createdAt: true,

        discussions: {
          select: {
            id: true,
          },
        },

        healthAndWellnesses: {
          select: {
            id: true,
          },
        },

        id: true,

        localEvents: {
          select: {
            id: true,
          },
        },

        resourcesAndAdvices: {
          select: {
            id: true,
          },
        },

        title: true,
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

  @common.Post("/:id/comment")
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "update",
    possession: "any",
  })
  async connectComment(
    @common.Param() params: HealthAndWellnessWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comment: {
        connect: body,
      },
    };
    await this.service.updateHealthAndWellness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comment")
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "update",
    possession: "any",
  })
  async updateComment(
    @common.Param() params: HealthAndWellnessWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comment: {
        set: body,
      },
    };
    await this.service.updateHealthAndWellness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comment")
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "update",
    possession: "any",
  })
  async disconnectComment(
    @common.Param() params: HealthAndWellnessWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comment: {
        disconnect: body,
      },
    };
    await this.service.updateHealthAndWellness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/user")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUser(
    @common.Req() request: Request,
    @common.Param() params: HealthAndWellnessWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUser(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        isActive: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/user")
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "update",
    possession: "any",
  })
  async connectUser(
    @common.Param() params: HealthAndWellnessWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        connect: body,
      },
    };
    await this.service.updateHealthAndWellness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/user")
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "update",
    possession: "any",
  })
  async updateUser(
    @common.Param() params: HealthAndWellnessWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        set: body,
      },
    };
    await this.service.updateHealthAndWellness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/user")
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "update",
    possession: "any",
  })
  async disconnectUser(
    @common.Param() params: HealthAndWellnessWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        disconnect: body,
      },
    };
    await this.service.updateHealthAndWellness({
      where: params,
      data,
      select: { id: true },
    });
  }
}
