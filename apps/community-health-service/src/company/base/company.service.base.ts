
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Company as PrismaCompany } from "@prisma/client";

export class CompanyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CompanyCountArgs, "select">): Promise<number> {
    return this.prisma.company.count(args);
  }

  async companies(args: Prisma.CompanyFindManyArgs): Promise<PrismaCompany[]> {
    return this.prisma.company.findMany(args);
  }
  async company(
    args: Prisma.CompanyFindUniqueArgs
  ): Promise<PrismaCompany | null> {
    return this.prisma.company.findUnique(args);
  }
  async createCompany(args: Prisma.CompanyCreateArgs): Promise<PrismaCompany> {
    return this.prisma.company.create(args);
  }
  async updateCompany(args: Prisma.CompanyUpdateArgs): Promise<PrismaCompany> {
    return this.prisma.company.update(args);
  }
  async deleteCompany(args: Prisma.CompanyDeleteArgs): Promise<PrismaCompany> {
    return this.prisma.company.delete(args);
  }
}
