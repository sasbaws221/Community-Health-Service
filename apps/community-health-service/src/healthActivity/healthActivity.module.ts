import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HealthActivityModuleBase } from "./base/healthActivity.module.base";
import { HealthActivityService } from "./healthActivity.service";
import { HealthActivityController } from "./healthActivity.controller";
import { HealthActivityResolver } from "./healthActivity.resolver";

@Module({
  imports: [HealthActivityModuleBase, forwardRef(() => AuthModule)],
  controllers: [HealthActivityController],
  providers: [HealthActivityService, HealthActivityResolver],
  exports: [HealthActivityService],
})
export class HealthActivityModule {}
