import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscussionServiceBase } from "./base/discussion.service.base";

@Injectable()
export class DiscussionService extends DiscussionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
