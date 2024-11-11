
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DiscussionService } from "../discussion.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DiscussionCreateInput } from "./DiscussionCreateInput";
import { Discussion } from "./Discussion";
import { DiscussionFindManyArgs } from "./DiscussionFindManyArgs";
import { DiscussionWhereUniqueInput } from "./DiscussionWhereUniqueInput";
import { DiscussionUpdateInput } from "./DiscussionUpdateInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DiscussionControllerBase {
  constructor(
    protected readonly service: DiscussionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Discussion })
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDiscussion(
    @common.Body() data: DiscussionCreateInput
  ): Promise<Discussion> {
    return await this.service.createDiscussion({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        id: true,
        status: true,
        title: true,
        topic: true,
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
  @swagger.ApiOkResponse({ type: [Discussion] })
  @ApiNestedQuery(DiscussionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async discussions(@common.Req() request: Request): Promise<Discussion[]> {
    const args = plainToClass(DiscussionFindManyArgs, request.query);
    return this.service.discussions({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,
        status: true,
        title: true,
        topic: true,
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
  @swagger.ApiOkResponse({ type: Discussion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async discussion(
    @common.Param() params: DiscussionWhereUniqueInput
  ): Promise<Discussion | null> {
    const result = await this.service.discussion({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,
        status: true,
        title: true,
        topic: true,
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
  @swagger.ApiOkResponse({ type: Discussion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDiscussion(
    @common.Param() params: DiscussionWhereUniqueInput,
    @common.Body() data: DiscussionUpdateInput
  ): Promise<Discussion | null> {
    try {
      return await this.service.updateDiscussion({
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
          content: true,
          createdAt: true,
          id: true,
          status: true,
          title: true,
          topic: true,
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
  @swagger.ApiOkResponse({ type: Discussion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDiscussion(
    @common.Param() params: DiscussionWhereUniqueInput
  ): Promise<Discussion | null> {
    try {
      return await this.service.deleteDiscussion({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,
          status: true,
          title: true,
          topic: true,
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
  @common.Get("/:id/comment")
  @ApiNestedQuery(CommentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async findComment(
    @common.Req() request: Request,
    @common.Param() params: DiscussionWhereUniqueInput
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
    resource: "Discussion",
    action: "update",
    possession: "any",
  })
  async connectComment(
    @common.Param() params: DiscussionWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comment: {
        connect: body,
      },
    };
    await this.service.updateDiscussion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comment")
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "update",
    possession: "any",
  })
  async updateComment(
    @common.Param() params: DiscussionWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comment: {
        set: body,
      },
    };
    await this.service.updateDiscussion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comment")
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "update",
    possession: "any",
  })
  async disconnectComment(
    @common.Param() params: DiscussionWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comment: {
        disconnect: body,
      },
    };
    await this.service.updateDiscussion({
      where: params,
      data,
      select: { id: true },
    });
  }
}
