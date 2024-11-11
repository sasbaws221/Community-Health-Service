import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicationModuleBase } from "./base/medication.module.base";
import { MedicationService } from "./medication.service";
import { MedicationController } from "./medication.controller";
import { MedicationResolver } from "./medication.resolver";

@Module({
  imports: [MedicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicationController],
  providers: [MedicationService, MedicationResolver],
  exports: [MedicationService],
})
export class MedicationModule {}
