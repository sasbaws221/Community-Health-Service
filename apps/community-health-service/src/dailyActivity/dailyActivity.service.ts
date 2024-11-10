import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DailyActivityServiceBase } from "./base/dailyActivity.service.base";

@Injectable()
export class DailyActivityService extends DailyActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
