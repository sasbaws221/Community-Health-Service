import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommunitySupportServiceBase } from "./base/communitySupport.service.base";

@Injectable()
export class CommunitySupportService extends CommunitySupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
