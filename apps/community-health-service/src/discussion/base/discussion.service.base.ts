
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Discussion as PrismaDiscussion,
  Comment as PrismaComment,
  User as PrismaUser,
} from "@prisma/client";

export class DiscussionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DiscussionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.discussion.count(args);
  }

  async discussions(
    args: Prisma.DiscussionFindManyArgs
  ): Promise<PrismaDiscussion[]> {
    return this.prisma.discussion.findMany(args);
  }
  async discussion(
    args: Prisma.DiscussionFindUniqueArgs
  ): Promise<PrismaDiscussion | null> {
    return this.prisma.discussion.findUnique(args);
  }
  async createDiscussion(
    args: Prisma.DiscussionCreateArgs
  ): Promise<PrismaDiscussion> {
    return this.prisma.discussion.create(args);
  }
  async updateDiscussion(
    args: Prisma.DiscussionUpdateArgs
  ): Promise<PrismaDiscussion> {
    return this.prisma.discussion.update(args);
  }
  async deleteDiscussion(
    args: Prisma.DiscussionDeleteArgs
  ): Promise<PrismaDiscussion> {
    return this.prisma.discussion.delete(args);
  }

  async findComment(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.discussion
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comment(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.discussion
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
