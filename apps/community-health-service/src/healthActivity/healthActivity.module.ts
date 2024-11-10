import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HealthActivityModuleBase } from "./base/healthActivity.module.base";
import { HealthActivityService } from "./healthActivity.service";
import { HealthActivityController } from "./healthActivity.controller";

@Module({
  imports: [HealthActivityModuleBase, forwardRef(() => AuthModule)],
  controllers: [HealthActivityController],
  providers: [HealthActivityService],
  exports: [HealthActivityService],
})
export class HealthActivityModule {}
