import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FinanceModuleBase } from "./base/finance.module.base";
import { FinanceService } from "./finance.service";
import { FinanceController } from "./finance.controller";

@Module({
  imports: [FinanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [FinanceController],
  providers: [FinanceService],
  exports: [FinanceService],
})
export class FinanceModule {}
