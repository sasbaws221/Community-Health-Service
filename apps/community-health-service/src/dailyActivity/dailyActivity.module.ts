import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DailyActivityModuleBase } from "./base/dailyActivity.module.base";
import { DailyActivityService } from "./dailyActivity.service";
import { DailyActivityController } from "./dailyActivity.controller";
import { DailyActivityResolver } from "./dailyActivity.resolver";

@Module({
  imports: [DailyActivityModuleBase, forwardRef(() => AuthModule)],
  controllers: [DailyActivityController],
  providers: [DailyActivityService, DailyActivityResolver],
  exports: [DailyActivityService],
})
export class DailyActivityModule {}
