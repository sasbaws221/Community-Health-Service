
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  WellnessGoal as PrismaWellnessGoal,
  User as PrismaUser,
} from "@prisma/client";

export class WellnessGoalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WellnessGoalCountArgs, "select">
  ): Promise<number> {
    return this.prisma.wellnessGoal.count(args);
  }

  async wellnessGoals(
    args: Prisma.WellnessGoalFindManyArgs
  ): Promise<PrismaWellnessGoal[]> {
    return this.prisma.wellnessGoal.findMany(args);
  }
  async wellnessGoal(
    args: Prisma.WellnessGoalFindUniqueArgs
  ): Promise<PrismaWellnessGoal | null> {
    return this.prisma.wellnessGoal.findUnique(args);
  }
  async createWellnessGoal(
    args: Prisma.WellnessGoalCreateArgs
  ): Promise<PrismaWellnessGoal> {
    return this.prisma.wellnessGoal.create(args);
  }
  async updateWellnessGoal(
    args: Prisma.WellnessGoalUpdateArgs
  ): Promise<PrismaWellnessGoal> {
    return this.prisma.wellnessGoal.update(args);
  }
  async deleteWellnessGoal(
    args: Prisma.WellnessGoalDeleteArgs
  ): Promise<PrismaWellnessGoal> {
    return this.prisma.wellnessGoal.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.wellnessGoal
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
