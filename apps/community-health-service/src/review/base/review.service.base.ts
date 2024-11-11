
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Review as PrismaReview,
  Medication as PrismaMedication,
  User as PrismaUser,
} from "@prisma/client";

export class ReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReviewCountArgs, "select">): Promise<number> {
    return this.prisma.review.count(args);
  }

  async reviews(args: Prisma.ReviewFindManyArgs): Promise<PrismaReview[]> {
    return this.prisma.review.findMany(args);
  }
  async review(
    args: Prisma.ReviewFindUniqueArgs
  ): Promise<PrismaReview | null> {
    return this.prisma.review.findUnique(args);
  }
  async createReview(args: Prisma.ReviewCreateArgs): Promise<PrismaReview> {
    return this.prisma.review.create(args);
  }
  async updateReview(args: Prisma.ReviewUpdateArgs): Promise<PrismaReview> {
    return this.prisma.review.update(args);
  }
  async deleteReview(args: Prisma.ReviewDeleteArgs): Promise<PrismaReview> {
    return this.prisma.review.delete(args);
  }

  async getMedication(parentId: string): Promise<PrismaMedication | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .medication();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
