import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DailyActivityModuleBase } from "./base/dailyActivity.module.base";
import { DailyActivityService } from "./dailyActivity.service";
import { DailyActivityController } from "./dailyActivity.controller";

@Module({
  imports: [DailyActivityModuleBase, forwardRef(() => AuthModule)],
  controllers: [DailyActivityController],
  providers: [DailyActivityService],
  exports: [DailyActivityService],
})
export class DailyActivityModule {}
