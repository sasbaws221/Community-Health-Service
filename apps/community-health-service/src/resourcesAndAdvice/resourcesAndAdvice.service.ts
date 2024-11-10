import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResourcesAndAdviceServiceBase } from "./base/resourcesAndAdvice.service.base";

@Injectable()
export class ResourcesAndAdviceService extends ResourcesAndAdviceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
