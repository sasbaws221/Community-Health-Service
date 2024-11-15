
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  LocalEvent as PrismaLocalEvent,
  Comment as PrismaComment,
  User as PrismaUser,
} from "@prisma/client";

export class LocalEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LocalEventCountArgs, "select">
  ): Promise<number> {
    return this.prisma.localEvent.count(args);
  }

  async localEvents(
    args: Prisma.LocalEventFindManyArgs
  ): Promise<PrismaLocalEvent[]> {
    return this.prisma.localEvent.findMany(args);
  }
  async localEvent(
    args: Prisma.LocalEventFindUniqueArgs
  ): Promise<PrismaLocalEvent | null> {
    return this.prisma.localEvent.findUnique(args);
  }
  async createLocalEvent(
    args: Prisma.LocalEventCreateArgs
  ): Promise<PrismaLocalEvent> {
    return this.prisma.localEvent.create(args);
  }
  async updateLocalEvent(
    args: Prisma.LocalEventUpdateArgs
  ): Promise<PrismaLocalEvent> {
    return this.prisma.localEvent.update(args);
  }
  async deleteLocalEvent(
    args: Prisma.LocalEventDeleteArgs
  ): Promise<PrismaLocalEvent> {
    return this.prisma.localEvent.delete(args);
  }

  async findComment(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.localEvent
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comment(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<PrismaUser[]> {
    return this.prisma.localEvent
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }
}
