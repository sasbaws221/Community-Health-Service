import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FinancialAssistanceModuleBase } from "./base/financialAssistance.module.base";
import { FinancialAssistanceService } from "./financialAssistance.service";
import { FinancialAssistanceController } from "./financialAssistance.controller";

@Module({
  imports: [FinancialAssistanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [FinancialAssistanceController],
  providers: [FinancialAssistanceService],
  exports: [FinancialAssistanceService],
})
export class FinancialAssistanceModule {}
