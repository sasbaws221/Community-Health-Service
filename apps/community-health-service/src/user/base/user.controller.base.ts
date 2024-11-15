
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { CommunitySupportFindManyArgs } from "../../communitySupport/base/CommunitySupportFindManyArgs";
import { CommunitySupport } from "../../communitySupport/base/CommunitySupport";
import { CommunitySupportWhereUniqueInput } from "../../communitySupport/base/CommunitySupportWhereUniqueInput";
import { DailyActivityFindManyArgs } from "../../dailyActivity/base/DailyActivityFindManyArgs";
import { DailyActivity } from "../../dailyActivity/base/DailyActivity";
import { DailyActivityWhereUniqueInput } from "../../dailyActivity/base/DailyActivityWhereUniqueInput";
import { DiscussionFindManyArgs } from "../../discussion/base/DiscussionFindManyArgs";
import { Discussion } from "../../discussion/base/Discussion";
import { DiscussionWhereUniqueInput } from "../../discussion/base/DiscussionWhereUniqueInput";
import { EducationFindManyArgs } from "../../education/base/EducationFindManyArgs";
import { Education } from "../../education/base/Education";
import { EducationWhereUniqueInput } from "../../education/base/EducationWhereUniqueInput";
import { FinancialAssistanceFindManyArgs } from "../../financialAssistance/base/FinancialAssistanceFindManyArgs";
import { FinancialAssistance } from "../../financialAssistance/base/FinancialAssistance";
import { FinancialAssistanceWhereUniqueInput } from "../../financialAssistance/base/FinancialAssistanceWhereUniqueInput";
import { HealthActivityFindManyArgs } from "../../healthActivity/base/HealthActivityFindManyArgs";
import { HealthActivity } from "../../healthActivity/base/HealthActivity";
import { HealthActivityWhereUniqueInput } from "../../healthActivity/base/HealthActivityWhereUniqueInput";
import { HealthAndWellnessFindManyArgs } from "../../healthAndWellness/base/HealthAndWellnessFindManyArgs";
import { HealthAndWellness } from "../../healthAndWellness/base/HealthAndWellness";
import { HealthAndWellnessWhereUniqueInput } from "../../healthAndWellness/base/HealthAndWellnessWhereUniqueInput";
import { LocalEventFindManyArgs } from "../../localEvent/base/LocalEventFindManyArgs";
import { LocalEvent } from "../../localEvent/base/LocalEvent";
import { LocalEventWhereUniqueInput } from "../../localEvent/base/LocalEventWhereUniqueInput";
import { MedicalPractitionerFindManyArgs } from "../../medicalPractitioner/base/MedicalPractitionerFindManyArgs";
import { MedicalPractitioner } from "../../medicalPractitioner/base/MedicalPractitioner";
import { MedicalPractitionerWhereUniqueInput } from "../../medicalPractitioner/base/MedicalPractitionerWhereUniqueInput";
import { MedicationOrderFindManyArgs } from "../../medicationOrder/base/MedicationOrderFindManyArgs";
import { MedicationOrder } from "../../medicationOrder/base/MedicationOrder";
import { MedicationOrderWhereUniqueInput } from "../../medicationOrder/base/MedicationOrderWhereUniqueInput";
import { ResourcesAndAdviceFindManyArgs } from "../../resourcesAndAdvice/base/ResourcesAndAdviceFindManyArgs";
import { ResourcesAndAdvice } from "../../resourcesAndAdvice/base/ResourcesAndAdvice";
import { ResourcesAndAdviceWhereUniqueInput } from "../../resourcesAndAdvice/base/ResourcesAndAdviceWhereUniqueInput";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { WellnessGoalFindManyArgs } from "../../wellnessGoal/base/WellnessGoalFindManyArgs";
import { WellnessGoal } from "../../wellnessGoal/base/WellnessGoal";
import { WellnessGoalWhereUniqueInput } from "../../wellnessGoal/base/WellnessGoalWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
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
  @common.Get("/:id/comments")
  @ApiNestedQuery(CommentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async findComments(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComments(params.id, {
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

  @common.Post("/:id/comments")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectComments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comments")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateComments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comments")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectComments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/communitySupports")
  @ApiNestedQuery(CommunitySupportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CommunitySupport",
    action: "read",
    possession: "any",
  })
  async findCommunitySupports(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<CommunitySupport[]> {
    const query = plainToClass(CommunitySupportFindManyArgs, request.query);
    const results = await this.service.findCommunitySupports(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        isAdmin: true,
        messageContent: true,

        sender: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/communitySupports")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectCommunitySupports(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CommunitySupportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      communitySupports: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/communitySupports")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateCommunitySupports(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CommunitySupportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      communitySupports: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/communitySupports")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectCommunitySupports(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CommunitySupportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      communitySupports: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/dailyActivities")
  @ApiNestedQuery(DailyActivityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "read",
    possession: "any",
  })
  async findDailyActivities(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<DailyActivity[]> {
    const query = plainToClass(DailyActivityFindManyArgs, request.query);
    const results = await this.service.findDailyActivities(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/dailyActivities")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectDailyActivities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DailyActivityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dailyActivities: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/dailyActivities")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateDailyActivities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DailyActivityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dailyActivities: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/dailyActivities")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectDailyActivities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DailyActivityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dailyActivities: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/discussions")
  @ApiNestedQuery(DiscussionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "read",
    possession: "any",
  })
  async findDiscussions(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Discussion[]> {
    const query = plainToClass(DiscussionFindManyArgs, request.query);
    const results = await this.service.findDiscussions(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/discussions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectDiscussions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DiscussionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discussions: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/discussions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateDiscussions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DiscussionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discussions: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/discussions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectDiscussions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DiscussionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      discussions: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/educations")
  @ApiNestedQuery(EducationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "read",
    possession: "any",
  })
  async findEducations(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Education[]> {
    const query = plainToClass(EducationFindManyArgs, request.query);
    const results = await this.service.findEducations(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/educations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectEducations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: EducationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      educations: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/educations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateEducations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: EducationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      educations: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/educations")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectEducations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: EducationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      educations: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/financialAssistances")
  @ApiNestedQuery(FinancialAssistanceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "read",
    possession: "any",
  })
  async findFinancialAssistances(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<FinancialAssistance[]> {
    const query = plainToClass(FinancialAssistanceFindManyArgs, request.query);
    const results = await this.service.findFinancialAssistances(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/financialAssistances")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectFinancialAssistances(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FinancialAssistanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      financialAssistances: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/financialAssistances")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateFinancialAssistances(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FinancialAssistanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      financialAssistances: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/financialAssistances")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectFinancialAssistances(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: FinancialAssistanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      financialAssistances: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/healthActivities")
  @ApiNestedQuery(HealthActivityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "read",
    possession: "any",
  })
  async findHealthActivities(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<HealthActivity[]> {
    const query = plainToClass(HealthActivityFindManyArgs, request.query);
    const results = await this.service.findHealthActivities(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/healthActivities")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectHealthActivities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HealthActivityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      healthActivities: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/healthActivities")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateHealthActivities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HealthActivityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      healthActivities: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/healthActivities")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectHealthActivities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HealthActivityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      healthActivities: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/healthAndWellnesses")
  @ApiNestedQuery(HealthAndWellnessFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "read",
    possession: "any",
  })
  async findHealthAndWellnesses(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<HealthAndWellness[]> {
    const query = plainToClass(HealthAndWellnessFindManyArgs, request.query);
    const results = await this.service.findHealthAndWellnesses(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/healthAndWellnesses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectHealthAndWellnesses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HealthAndWellnessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      healthAndWellnesses: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/healthAndWellnesses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateHealthAndWellnesses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HealthAndWellnessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      healthAndWellnesses: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/healthAndWellnesses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectHealthAndWellnesses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HealthAndWellnessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      healthAndWellnesses: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/localEvents")
  @ApiNestedQuery(LocalEventFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "read",
    possession: "any",
  })
  async findLocalEvents(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<LocalEvent[]> {
    const query = plainToClass(LocalEventFindManyArgs, request.query);
    const results = await this.service.findLocalEvents(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/localEvents")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectLocalEvents(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: LocalEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localEvents: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/localEvents")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateLocalEvents(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: LocalEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localEvents: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/localEvents")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectLocalEvents(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: LocalEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localEvents: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/medicalPractitioners")
  @ApiNestedQuery(MedicalPractitionerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "read",
    possession: "any",
  })
  async findMedicalPractitioners(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<MedicalPractitioner[]> {
    const query = plainToClass(MedicalPractitionerFindManyArgs, request.query);
    const results = await this.service.findMedicalPractitioners(params.id, {
      ...query,
      select: {
        bio: true,
        contact: true,
        createdAt: true,
        id: true,
        licenseNumber: true,
        specialization: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        yearsOfExperience: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/medicalPractitioners")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectMedicalPractitioners(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MedicalPractitionerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicalPractitioners: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/medicalPractitioners")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateMedicalPractitioners(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MedicalPractitionerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicalPractitioners: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/medicalPractitioners")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectMedicalPractitioners(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MedicalPractitionerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicalPractitioners: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/medicationOrders")
  @ApiNestedQuery(MedicationOrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "read",
    possession: "any",
  })
  async findMedicationOrders(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<MedicationOrder[]> {
    const query = plainToClass(MedicationOrderFindManyArgs, request.query);
    const results = await this.service.findMedicationOrders(params.id, {
      ...query,
      select: {
        createdAt: true,
        deliveredAt: true,
        id: true,
        orderedAt: true,
        quantity: true,
        status: true,
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

  @common.Post("/:id/medicationOrders")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectMedicationOrders(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MedicationOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicationOrders: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/medicationOrders")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateMedicationOrders(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MedicationOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicationOrders: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/medicationOrders")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectMedicationOrders(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MedicationOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicationOrders: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/resourcesAndAdvices")
  @ApiNestedQuery(ResourcesAndAdviceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ResourcesAndAdvice",
    action: "read",
    possession: "any",
  })
  async findResourcesAndAdvices(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<ResourcesAndAdvice[]> {
    const query = plainToClass(ResourcesAndAdviceFindManyArgs, request.query);
    const results = await this.service.findResourcesAndAdvices(params.id, {
      ...query,
      select: {
        author: true,

        category: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        link: true,
        tag: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/resourcesAndAdvices")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectResourcesAndAdvices(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ResourcesAndAdviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resourcesAndAdvices: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/resourcesAndAdvices")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateResourcesAndAdvices(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ResourcesAndAdviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resourcesAndAdvices: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/resourcesAndAdvices")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectResourcesAndAdvices(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ResourcesAndAdviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resourcesAndAdvices: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/reviews")
  @ApiNestedQuery(ReviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findReviews(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReviews(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectReviews(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateReviews(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectReviews(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wellnessGoals")
  @ApiNestedQuery(WellnessGoalFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "read",
    possession: "any",
  })
  async findWellnessGoals(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<WellnessGoal[]> {
    const query = plainToClass(WellnessGoalFindManyArgs, request.query);
    const results = await this.service.findWellnessGoals(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/wellnessGoals")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectWellnessGoals(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: WellnessGoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wellnessGoals: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wellnessGoals")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateWellnessGoals(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: WellnessGoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wellnessGoals: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wellnessGoals")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectWellnessGoals(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: WellnessGoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wellnessGoals: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
