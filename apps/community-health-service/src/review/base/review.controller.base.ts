
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ReviewService } from "../review.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ReviewCreateInput } from "./ReviewCreateInput";
import { Review } from "./Review";
import { ReviewFindManyArgs } from "./ReviewFindManyArgs";
import { ReviewWhereUniqueInput } from "./ReviewWhereUniqueInput";
import { ReviewUpdateInput } from "./ReviewUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ReviewControllerBase {
  constructor(
    protected readonly service: ReviewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Review })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createReview(@common.Body() data: ReviewCreateInput): Promise<Review> {
    return await this.service.createReview({
      data: {
        ...data,

        medication: data.medication
          ? {
              connect: data.medication,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Review] })
  @ApiNestedQuery(ReviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async reviews(@common.Req() request: Request): Promise<Review[]> {
    const args = plainToClass(ReviewFindManyArgs, request.query);
    return this.service.reviews({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async review(
    @common.Param() params: ReviewWhereUniqueInput
  ): Promise<Review | null> {
    const result = await this.service.review({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateReview(
    @common.Param() params: ReviewWhereUniqueInput,
    @common.Body() data: ReviewUpdateInput
  ): Promise<Review | null> {
    try {
      return await this.service.updateReview({
        where: params,
        data: {
          ...data,

          medication: data.medication
            ? {
                connect: data.medication,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteReview(
    @common.Param() params: ReviewWhereUniqueInput
  ): Promise<Review | null> {
    try {
      return await this.service.deleteReview({
        where: params,
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
