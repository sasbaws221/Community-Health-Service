
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  MedicalPractitioner as PrismaMedicalPractitioner,
  User as PrismaUser,
} from "@prisma/client";

export class MedicalPractitionerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MedicalPractitionerCountArgs, "select">
  ): Promise<number> {
    return this.prisma.medicalPractitioner.count(args);
  }

  async medicalPractitioners(
    args: Prisma.MedicalPractitionerFindManyArgs
  ): Promise<PrismaMedicalPractitioner[]> {
    return this.prisma.medicalPractitioner.findMany(args);
  }
  async medicalPractitioner(
    args: Prisma.MedicalPractitionerFindUniqueArgs
  ): Promise<PrismaMedicalPractitioner | null> {
    return this.prisma.medicalPractitioner.findUnique(args);
  }
  async createMedicalPractitioner(
    args: Prisma.MedicalPractitionerCreateArgs
  ): Promise<PrismaMedicalPractitioner> {
    return this.prisma.medicalPractitioner.create(args);
  }
  async updateMedicalPractitioner(
    args: Prisma.MedicalPractitionerUpdateArgs
  ): Promise<PrismaMedicalPractitioner> {
    return this.prisma.medicalPractitioner.update(args);
  }
  async deleteMedicalPractitioner(
    args: Prisma.MedicalPractitionerDeleteArgs
  ): Promise<PrismaMedicalPractitioner> {
    return this.prisma.medicalPractitioner.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.medicalPractitioner
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
