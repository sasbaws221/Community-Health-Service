import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EducationServiceBase } from "./base/education.service.base";

@Injectable()
export class EducationService extends EducationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
