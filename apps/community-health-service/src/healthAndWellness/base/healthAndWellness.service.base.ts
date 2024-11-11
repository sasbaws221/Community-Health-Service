
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  HealthAndWellness as PrismaHealthAndWellness,
  Comment as PrismaComment,
  User as PrismaUser,
  Category as PrismaCategory,
} from "@prisma/client";

export class HealthAndWellnessServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.HealthAndWellnessCountArgs, "select">
  ): Promise<number> {
    return this.prisma.healthAndWellness.count(args);
  }

  async healthAndWellnesses(
    args: Prisma.HealthAndWellnessFindManyArgs
  ): Promise<PrismaHealthAndWellness[]> {
    return this.prisma.healthAndWellness.findMany(args);
  }
  async healthAndWellness(
    args: Prisma.HealthAndWellnessFindUniqueArgs
  ): Promise<PrismaHealthAndWellness | null> {
    return this.prisma.healthAndWellness.findUnique(args);
  }
  async createHealthAndWellness(
    args: Prisma.HealthAndWellnessCreateArgs
  ): Promise<PrismaHealthAndWellness> {
    return this.prisma.healthAndWellness.create(args);
  }
  async updateHealthAndWellness(
    args: Prisma.HealthAndWellnessUpdateArgs
  ): Promise<PrismaHealthAndWellness> {
    return this.prisma.healthAndWellness.update(args);
  }
  async deleteHealthAndWellness(
    args: Prisma.HealthAndWellnessDeleteArgs
  ): Promise<PrismaHealthAndWellness> {
    return this.prisma.healthAndWellness.delete(args);
  }

  async findComment(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.healthAndWellness
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comment(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<PrismaUser[]> {
    return this.prisma.healthAndWellness
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.healthAndWellness
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}
