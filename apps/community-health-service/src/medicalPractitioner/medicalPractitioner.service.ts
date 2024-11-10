import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicalPractitionerServiceBase } from "./base/medicalPractitioner.service.base";

@Injectable()
export class MedicalPractitionerService extends MedicalPractitionerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
