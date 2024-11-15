
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ResourcesAndAdvice as PrismaResourcesAndAdvice,
  Comment as PrismaComment,
  User as PrismaUser,
  Category as PrismaCategory,
} from "@prisma/client";

export class ResourcesAndAdviceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ResourcesAndAdviceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.resourcesAndAdvice.count(args);
  }

  async resourcesAndAdvices(
    args: Prisma.ResourcesAndAdviceFindManyArgs
  ): Promise<PrismaResourcesAndAdvice[]> {
    return this.prisma.resourcesAndAdvice.findMany(args);
  }
  async resourcesAndAdvice(
    args: Prisma.ResourcesAndAdviceFindUniqueArgs
  ): Promise<PrismaResourcesAndAdvice | null> {
    return this.prisma.resourcesAndAdvice.findUnique(args);
  }
  async createResourcesAndAdvice(
    args: Prisma.ResourcesAndAdviceCreateArgs
  ): Promise<PrismaResourcesAndAdvice> {
    return this.prisma.resourcesAndAdvice.create(args);
  }
  async updateResourcesAndAdvice(
    args: Prisma.ResourcesAndAdviceUpdateArgs
  ): Promise<PrismaResourcesAndAdvice> {
    return this.prisma.resourcesAndAdvice.update(args);
  }
  async deleteResourcesAndAdvice(
    args: Prisma.ResourcesAndAdviceDeleteArgs
  ): Promise<PrismaResourcesAndAdvice> {
    return this.prisma.resourcesAndAdvice.delete(args);
  }

  async findComment(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.resourcesAndAdvice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comment(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<PrismaUser[]> {
    return this.prisma.resourcesAndAdvice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.resourcesAndAdvice
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}
