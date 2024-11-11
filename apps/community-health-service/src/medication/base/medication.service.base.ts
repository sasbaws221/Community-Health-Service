
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Medication as PrismaMedication,
  MedicationOrder as PrismaMedicationOrder,
  Review as PrismaReview,
} from "@prisma/client";

export class MedicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MedicationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.medication.count(args);
  }

  async medications(
    args: Prisma.MedicationFindManyArgs
  ): Promise<PrismaMedication[]> {
    return this.prisma.medication.findMany(args);
  }
  async medication(
    args: Prisma.MedicationFindUniqueArgs
  ): Promise<PrismaMedication | null> {
    return this.prisma.medication.findUnique(args);
  }
  async createMedication(
    args: Prisma.MedicationCreateArgs
  ): Promise<PrismaMedication> {
    return this.prisma.medication.create(args);
  }
  async updateMedication(
    args: Prisma.MedicationUpdateArgs
  ): Promise<PrismaMedication> {
    return this.prisma.medication.update(args);
  }
  async deleteMedication(
    args: Prisma.MedicationDeleteArgs
  ): Promise<PrismaMedication> {
    return this.prisma.medication.delete(args);
  }

  async findMedicationOrders(
    parentId: string,
    args: Prisma.MedicationOrderFindManyArgs
  ): Promise<PrismaMedicationOrder[]> {
    return this.prisma.medication
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .medicationOrders(args);
  }

  async findReviews(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<PrismaReview[]> {
    return this.prisma.medication
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reviews(args);
  }
}
