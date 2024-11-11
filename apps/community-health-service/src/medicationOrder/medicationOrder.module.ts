import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicationOrderModuleBase } from "./base/medicationOrder.module.base";
import { MedicationOrderService } from "./medicationOrder.service";
import { MedicationOrderController } from "./medicationOrder.controller";
import { MedicationOrderResolver } from "./medicationOrder.resolver";

@Module({
  imports: [MedicationOrderModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicationOrderController],
  providers: [MedicationOrderService, MedicationOrderResolver],
  exports: [MedicationOrderService],
})
export class MedicationOrderModule {}
