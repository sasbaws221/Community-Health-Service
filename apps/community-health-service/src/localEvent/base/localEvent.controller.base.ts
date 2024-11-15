
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { LocalEventService } from "../localEvent.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LocalEventCreateInput } from "./LocalEventCreateInput";
import { LocalEvent } from "./LocalEvent";
import { LocalEventFindManyArgs } from "./LocalEventFindManyArgs";
import { LocalEventWhereUniqueInput } from "./LocalEventWhereUniqueInput";
import { LocalEventUpdateInput } from "./LocalEventUpdateInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LocalEventControllerBase {
  constructor(
    protected readonly service: LocalEventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LocalEvent })
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createLocalEvent(
    @common.Body() data: LocalEventCreateInput
  ): Promise<LocalEvent> {
    return await this.service.createLocalEvent({
      data: data,
      select: {
        category: true,
        contact: true,
        createdAt: true,
        description: true,
        eventDate: true,
        id: true,
        location: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [LocalEvent] })
  @ApiNestedQuery(LocalEventFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async localEvents(@common.Req() request: Request): Promise<LocalEvent[]> {
    const args = plainToClass(LocalEventFindManyArgs, request.query);
    return this.service.localEvents({
      ...args,
      select: {
        category: true,
        contact: true,
        createdAt: true,
        description: true,
        eventDate: true,
        id: true,
        location: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LocalEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async localEvent(
    @common.Param() params: LocalEventWhereUniqueInput
  ): Promise<LocalEvent | null> {
    const result = await this.service.localEvent({
      where: params,
      select: {
        category: true,
        contact: true,
        createdAt: true,
        description: true,
        eventDate: true,
        id: true,
        location: true,
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
  @swagger.ApiOkResponse({ type: LocalEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateLocalEvent(
    @common.Param() params: LocalEventWhereUniqueInput,
    @common.Body() data: LocalEventUpdateInput
  ): Promise<LocalEvent | null> {
    try {
      return await this.service.updateLocalEvent({
        where: params,
        data: data,
        select: {
          category: true,
          contact: true,
          createdAt: true,
          description: true,
          eventDate: true,
          id: true,
          location: true,
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
  @swagger.ApiOkResponse({ type: LocalEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLocalEvent(
    @common.Param() params: LocalEventWhereUniqueInput
  ): Promise<LocalEvent | null> {
    try {
      return await this.service.deleteLocalEvent({
        where: params,
        select: {
          category: true,
          contact: true,
          createdAt: true,
          description: true,
          eventDate: true,
          id: true,
          location: true,
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
    @common.Param() params: LocalEventWhereUniqueInput
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
    resource: "LocalEvent",
    action: "update",
    possession: "any",
  })
  async connectComment(
    @common.Param() params: LocalEventWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comment: {
        connect: body,
      },
    };
    await this.service.updateLocalEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comment")
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "update",
    possession: "any",
  })
  async updateComment(
    @common.Param() params: LocalEventWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comment: {
        set: body,
      },
    };
    await this.service.updateLocalEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comment")
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "update",
    possession: "any",
  })
  async disconnectComment(
    @common.Param() params: LocalEventWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comment: {
        disconnect: body,
      },
    };
    await this.service.updateLocalEvent({
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
    @common.Param() params: LocalEventWhereUniqueInput
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
    resource: "LocalEvent",
    action: "update",
    possession: "any",
  })
  async connectUser(
    @common.Param() params: LocalEventWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        connect: body,
      },
    };
    await this.service.updateLocalEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/user")
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "update",
    possession: "any",
  })
  async updateUser(
    @common.Param() params: LocalEventWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        set: body,
      },
    };
    await this.service.updateLocalEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/user")
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "update",
    possession: "any",
  })
  async disconnectUser(
    @common.Param() params: LocalEventWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        disconnect: body,
      },
    };
    await this.service.updateLocalEvent({
      where: params,
      data,
      select: { id: true },
    });
  }
}
