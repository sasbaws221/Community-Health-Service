import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicalPractitionerModuleBase } from "./base/medicalPractitioner.module.base";
import { MedicalPractitionerService } from "./medicalPractitioner.service";
import { MedicalPractitionerController } from "./medicalPractitioner.controller";
import { MedicalPractitionerResolver } from "./medicalPractitioner.resolver";

@Module({
  imports: [MedicalPractitionerModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicalPractitionerController],
  providers: [MedicalPractitionerService, MedicalPractitionerResolver],
  exports: [MedicalPractitionerService],
})
export class MedicalPractitionerModule {}
