import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WellnessGoalServiceBase } from "./base/wellnessGoal.service.base";

@Injectable()
export class WellnessGoalService extends WellnessGoalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
