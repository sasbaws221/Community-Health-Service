import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HealthAndWellnessServiceBase } from "./base/healthAndWellness.service.base";

@Injectable()
export class HealthAndWellnessService extends HealthAndWellnessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
