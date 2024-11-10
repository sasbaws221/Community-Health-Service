import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicationOrderServiceBase } from "./base/medicationOrder.service.base";

@Injectable()
export class MedicationOrderService extends MedicationOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
