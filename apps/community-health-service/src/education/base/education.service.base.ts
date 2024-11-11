
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Education as PrismaEducation,
  User as PrismaUser,
  Category as PrismaCategory,
} from "@prisma/client";

export class EducationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EducationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.education.count(args);
  }

  async educations(
    args: Prisma.EducationFindManyArgs
  ): Promise<PrismaEducation[]> {
    return this.prisma.education.findMany(args);
  }
  async education(
    args: Prisma.EducationFindUniqueArgs
  ): Promise<PrismaEducation | null> {
    return this.prisma.education.findUnique(args);
  }
  async createEducation(
    args: Prisma.EducationCreateArgs
  ): Promise<PrismaEducation> {
    return this.prisma.education.create(args);
  }
  async updateEducation(
    args: Prisma.EducationUpdateArgs
  ): Promise<PrismaEducation> {
    return this.prisma.education.update(args);
  }
  async deleteEducation(
    args: Prisma.EducationDeleteArgs
  ): Promise<PrismaEducation> {
    return this.prisma.education.delete(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<PrismaUser[]> {
    return this.prisma.education
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.education
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}
