
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  MedicationOrder as PrismaMedicationOrder,
  Medication as PrismaMedication,
  User as PrismaUser,
} from "@prisma/client";

export class MedicationOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MedicationOrderCountArgs, "select">
  ): Promise<number> {
    return this.prisma.medicationOrder.count(args);
  }

  async medicationOrders(
    args: Prisma.MedicationOrderFindManyArgs
  ): Promise<PrismaMedicationOrder[]> {
    return this.prisma.medicationOrder.findMany(args);
  }
  async medicationOrder(
    args: Prisma.MedicationOrderFindUniqueArgs
  ): Promise<PrismaMedicationOrder | null> {
    return this.prisma.medicationOrder.findUnique(args);
  }
  async createMedicationOrder(
    args: Prisma.MedicationOrderCreateArgs
  ): Promise<PrismaMedicationOrder> {
    return this.prisma.medicationOrder.create(args);
  }
  async updateMedicationOrder(
    args: Prisma.MedicationOrderUpdateArgs
  ): Promise<PrismaMedicationOrder> {
    return this.prisma.medicationOrder.update(args);
  }
  async deleteMedicationOrder(
    args: Prisma.MedicationOrderDeleteArgs
  ): Promise<PrismaMedicationOrder> {
    return this.prisma.medicationOrder.delete(args);
  }

  async findMedication(
    parentId: string,
    args: Prisma.MedicationFindManyArgs
  ): Promise<PrismaMedication[]> {
    return this.prisma.medicationOrder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .medication(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.medicationOrder
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
