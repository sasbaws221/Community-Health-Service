
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  DailyActivity as PrismaDailyActivity,
  User as PrismaUser,
} from "@prisma/client";

export class DailyActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DailyActivityCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dailyActivity.count(args);
  }

  async dailyActivities(
    args: Prisma.DailyActivityFindManyArgs
  ): Promise<PrismaDailyActivity[]> {
    return this.prisma.dailyActivity.findMany(args);
  }
  async dailyActivity(
    args: Prisma.DailyActivityFindUniqueArgs
  ): Promise<PrismaDailyActivity | null> {
    return this.prisma.dailyActivity.findUnique(args);
  }
  async createDailyActivity(
    args: Prisma.DailyActivityCreateArgs
  ): Promise<PrismaDailyActivity> {
    return this.prisma.dailyActivity.create(args);
  }
  async updateDailyActivity(
    args: Prisma.DailyActivityUpdateArgs
  ): Promise<PrismaDailyActivity> {
    return this.prisma.dailyActivity.update(args);
  }
  async deleteDailyActivity(
    args: Prisma.DailyActivityDeleteArgs
  ): Promise<PrismaDailyActivity> {
    return this.prisma.dailyActivity.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.dailyActivity
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
