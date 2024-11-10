import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocalEventServiceBase } from "./base/localEvent.service.base";

@Injectable()
export class LocalEventService extends LocalEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
