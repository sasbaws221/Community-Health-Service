
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  HealthActivity as PrismaHealthActivity,
  User as PrismaUser,
} from "@prisma/client";

export class HealthActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.HealthActivityCountArgs, "select">
  ): Promise<number> {
    return this.prisma.healthActivity.count(args);
  }

  async healthActivities(
    args: Prisma.HealthActivityFindManyArgs
  ): Promise<PrismaHealthActivity[]> {
    return this.prisma.healthActivity.findMany(args);
  }
  async healthActivity(
    args: Prisma.HealthActivityFindUniqueArgs
  ): Promise<PrismaHealthActivity | null> {
    return this.prisma.healthActivity.findUnique(args);
  }
  async createHealthActivity(
    args: Prisma.HealthActivityCreateArgs
  ): Promise<PrismaHealthActivity> {
    return this.prisma.healthActivity.create(args);
  }
  async updateHealthActivity(
    args: Prisma.HealthActivityUpdateArgs
  ): Promise<PrismaHealthActivity> {
    return this.prisma.healthActivity.update(args);
  }
  async deleteHealthActivity(
    args: Prisma.HealthActivityDeleteArgs
  ): Promise<PrismaHealthActivity> {
    return this.prisma.healthActivity.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.healthActivity
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
