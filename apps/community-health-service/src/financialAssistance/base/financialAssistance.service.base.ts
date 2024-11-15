
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  FinancialAssistance as PrismaFinancialAssistance,
  Finance as PrismaFinance,
  User as PrismaUser,
} from "@prisma/client";

export class FinancialAssistanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FinancialAssistanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.financialAssistance.count(args);
  }

  async financialAssistances(
    args: Prisma.FinancialAssistanceFindManyArgs
  ): Promise<PrismaFinancialAssistance[]> {
    return this.prisma.financialAssistance.findMany(args);
  }
  async financialAssistance(
    args: Prisma.FinancialAssistanceFindUniqueArgs
  ): Promise<PrismaFinancialAssistance | null> {
    return this.prisma.financialAssistance.findUnique(args);
  }
  async createFinancialAssistance(
    args: Prisma.FinancialAssistanceCreateArgs
  ): Promise<PrismaFinancialAssistance> {
    return this.prisma.financialAssistance.create(args);
  }
  async updateFinancialAssistance(
    args: Prisma.FinancialAssistanceUpdateArgs
  ): Promise<PrismaFinancialAssistance> {
    return this.prisma.financialAssistance.update(args);
  }
  async deleteFinancialAssistance(
    args: Prisma.FinancialAssistanceDeleteArgs
  ): Promise<PrismaFinancialAssistance> {
    return this.prisma.financialAssistance.delete(args);
  }

  async getSupportType(parentId: string): Promise<PrismaFinance | null> {
    return this.prisma.financialAssistance
      .findUnique({
        where: { id: parentId },
      })
      .supportType();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.financialAssistance
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
