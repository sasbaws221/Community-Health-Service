import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialAssistanceServiceBase } from "./base/financialAssistance.service.base";

@Injectable()
export class FinancialAssistanceService extends FinancialAssistanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
