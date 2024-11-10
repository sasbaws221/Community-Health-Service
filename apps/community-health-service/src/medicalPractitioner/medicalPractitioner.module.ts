import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicalPractitionerModuleBase } from "./base/medicalPractitioner.module.base";
import { MedicalPractitionerService } from "./medicalPractitioner.service";
import { MedicalPractitionerController } from "./medicalPractitioner.controller";

@Module({
  imports: [MedicalPractitionerModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicalPractitionerController],
  providers: [MedicalPractitionerService],
  exports: [MedicalPractitionerService],
})
export class MedicalPractitionerModule {}
