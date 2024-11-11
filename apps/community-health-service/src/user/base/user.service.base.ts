
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  User as PrismaUser,
  Comment as PrismaComment,
  CommunitySupport as PrismaCommunitySupport,
  DailyActivity as PrismaDailyActivity,
  Discussion as PrismaDiscussion,
  Education as PrismaEducation,
  FinancialAssistance as PrismaFinancialAssistance,
  HealthActivity as PrismaHealthActivity,
  HealthAndWellness as PrismaHealthAndWellness,
  LocalEvent as PrismaLocalEvent,
  MedicalPractitioner as PrismaMedicalPractitioner,
  MedicationOrder as PrismaMedicationOrder,
  ResourcesAndAdvice as PrismaResourcesAndAdvice,
  Review as PrismaReview,
  WellnessGoal as PrismaWellnessGoal,
} from "@prisma/client";

import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count(args: Omit<Prisma.UserCountArgs, "select">): Promise<number> {
    return this.prisma.user.count(args);
  }

  async users(args: Prisma.UserFindManyArgs): Promise<PrismaUser[]> {
    return this.prisma.user.findMany(args);
  }
  async user(args: Prisma.UserFindUniqueArgs): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique(args);
  }
  async createUser(args: Prisma.UserCreateArgs): Promise<PrismaUser> {
    return this.prisma.user.create({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async updateUser(args: Prisma.UserUpdateArgs): Promise<PrismaUser> {
    return this.prisma.user.update({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async deleteUser(args: Prisma.UserDeleteArgs): Promise<PrismaUser> {
    return this.prisma.user.delete(args);
  }

  async findComments(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comments(args);
  }

  async findCommunitySupports(
    parentId: string,
    args: Prisma.CommunitySupportFindManyArgs
  ): Promise<PrismaCommunitySupport[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .communitySupports(args);
  }

  async findDailyActivities(
    parentId: string,
    args: Prisma.DailyActivityFindManyArgs
  ): Promise<PrismaDailyActivity[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .dailyActivities(args);
  }

  async findDiscussions(
    parentId: string,
    args: Prisma.DiscussionFindManyArgs
  ): Promise<PrismaDiscussion[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .discussions(args);
  }

  async findEducations(
    parentId: string,
    args: Prisma.EducationFindManyArgs
  ): Promise<PrismaEducation[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .educations(args);
  }

  async findFinancialAssistances(
    parentId: string,
    args: Prisma.FinancialAssistanceFindManyArgs
  ): Promise<PrismaFinancialAssistance[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .financialAssistances(args);
  }

  async findHealthActivities(
    parentId: string,
    args: Prisma.HealthActivityFindManyArgs
  ): Promise<PrismaHealthActivity[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .healthActivities(args);
  }

  async findHealthAndWellnesses(
    parentId: string,
    args: Prisma.HealthAndWellnessFindManyArgs
  ): Promise<PrismaHealthAndWellness[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .healthAndWellnesses(args);
  }

  async findLocalEvents(
    parentId: string,
    args: Prisma.LocalEventFindManyArgs
  ): Promise<PrismaLocalEvent[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .localEvents(args);
  }

  async findMedicalPractitioners(
    parentId: string,
    args: Prisma.MedicalPractitionerFindManyArgs
  ): Promise<PrismaMedicalPractitioner[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .medicalPractitioners(args);
  }

  async findMedicationOrders(
    parentId: string,
    args: Prisma.MedicationOrderFindManyArgs
  ): Promise<PrismaMedicationOrder[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .medicationOrders(args);
  }

  async findResourcesAndAdvices(
    parentId: string,
    args: Prisma.ResourcesAndAdviceFindManyArgs
  ): Promise<PrismaResourcesAndAdvice[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .resourcesAndAdvices(args);
  }

  async findReviews(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<PrismaReview[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reviews(args);
  }

  async findWellnessGoals(
    parentId: string,
    args: Prisma.WellnessGoalFindManyArgs
  ): Promise<PrismaWellnessGoal[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .wellnessGoals(args);
  }
}
