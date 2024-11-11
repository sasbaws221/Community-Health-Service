import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FinancialAssistanceModuleBase } from "./base/financialAssistance.module.base";
import { FinancialAssistanceService } from "./financialAssistance.service";
import { FinancialAssistanceController } from "./financialAssistance.controller";
import { FinancialAssistanceResolver } from "./financialAssistance.resolver";

@Module({
  imports: [FinancialAssistanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [FinancialAssistanceController],
  providers: [FinancialAssistanceService, FinancialAssistanceResolver],
  exports: [FinancialAssistanceService],
})
export class FinancialAssistanceModule {}
