
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Finance as PrismaFinance,
  FinancialAssistance as PrismaFinancialAssistance,
} from "@prisma/client";

export class FinanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FinanceCountArgs, "select">): Promise<number> {
    return this.prisma.finance.count(args);
  }

  async finances(args: Prisma.FinanceFindManyArgs): Promise<PrismaFinance[]> {
    return this.prisma.finance.findMany(args);
  }
  async finance(
    args: Prisma.FinanceFindUniqueArgs
  ): Promise<PrismaFinance | null> {
    return this.prisma.finance.findUnique(args);
  }
  async createFinance(args: Prisma.FinanceCreateArgs): Promise<PrismaFinance> {
    return this.prisma.finance.create(args);
  }
  async updateFinance(args: Prisma.FinanceUpdateArgs): Promise<PrismaFinance> {
    return this.prisma.finance.update(args);
  }
  async deleteFinance(args: Prisma.FinanceDeleteArgs): Promise<PrismaFinance> {
    return this.prisma.finance.delete(args);
  }

  async getFinancialAssistances(
    parentId: string
  ): Promise<PrismaFinancialAssistance | null> {
    return this.prisma.finance
      .findUnique({
        where: { id: parentId },
      })
      .financialAssistances();
  }
}
