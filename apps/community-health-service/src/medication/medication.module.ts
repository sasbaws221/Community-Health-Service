import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicationModuleBase } from "./base/medication.module.base";
import { MedicationService } from "./medication.service";
import { MedicationController } from "./medication.controller";

@Module({
  imports: [MedicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicationController],
  providers: [MedicationService],
  exports: [MedicationService],
})
export class MedicationModule {}
