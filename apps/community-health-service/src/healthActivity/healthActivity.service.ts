import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HealthActivityServiceBase } from "./base/healthActivity.service.base";

@Injectable()
export class HealthActivityService extends HealthActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
