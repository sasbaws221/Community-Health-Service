
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EducationService } from "../education.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EducationCreateInput } from "./EducationCreateInput";
import { Education } from "./Education";
import { EducationFindManyArgs } from "./EducationFindManyArgs";
import { EducationWhereUniqueInput } from "./EducationWhereUniqueInput";
import { EducationUpdateInput } from "./EducationUpdateInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EducationControllerBase {
  constructor(
    protected readonly service: EducationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Education })
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEducation(
    @common.Body() data: EducationCreateInput
  ): Promise<Education> {
    return await this.service.createEducation({
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

        createdAt: true,
        description: true,
        difficultyLevel: true,
        duration: true,
        id: true,
        link: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Education] })
  @ApiNestedQuery(EducationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async educations(@common.Req() request: Request): Promise<Education[]> {
    const args = plainToClass(EducationFindManyArgs, request.query);
    return this.service.educations({
      ...args,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        difficultyLevel: true,
        duration: true,
        id: true,
        link: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Education })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async education(
    @common.Param() params: EducationWhereUniqueInput
  ): Promise<Education | null> {
    const result = await this.service.education({
      where: params,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        difficultyLevel: true,
        duration: true,
        id: true,
        link: true,
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
  @swagger.ApiOkResponse({ type: Education })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEducation(
    @common.Param() params: EducationWhereUniqueInput,
    @common.Body() data: EducationUpdateInput
  ): Promise<Education | null> {
    try {
      return await this.service.updateEducation({
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

          createdAt: true,
          description: true,
          difficultyLevel: true,
          duration: true,
          id: true,
          link: true,
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
  @swagger.ApiOkResponse({ type: Education })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEducation(
    @common.Param() params: EducationWhereUniqueInput
  ): Promise<Education | null> {
    try {
      return await this.service.deleteEducation({
        where: params,
        select: {
          category: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          difficultyLevel: true,
          duration: true,
          id: true,
          link: true,
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
  @common.Get("/:id/user")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUser(
    @common.Req() request: Request,
    @common.Param() params: EducationWhereUniqueInput
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
    resource: "Education",
    action: "update",
    possession: "any",
  })
  async connectUser(
    @common.Param() params: EducationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        connect: body,
      },
    };
    await this.service.updateEducation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/user")
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "update",
    possession: "any",
  })
  async updateUser(
    @common.Param() params: EducationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        set: body,
      },
    };
    await this.service.updateEducation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/user")
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "update",
    possession: "any",
  })
  async disconnectUser(
    @common.Param() params: EducationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        disconnect: body,
      },
    };
    await this.service.updateEducation({
      where: params,
      data,
      select: { id: true },
    });
  }
}
