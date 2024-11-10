import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HealthAndWellnessModuleBase } from "./base/healthAndWellness.module.base";
import { HealthAndWellnessService } from "./healthAndWellness.service";
import { HealthAndWellnessController } from "./healthAndWellness.controller";

@Module({
  imports: [HealthAndWellnessModuleBase, forwardRef(() => AuthModule)],
  controllers: [HealthAndWellnessController],
  providers: [HealthAndWellnessService],
  exports: [HealthAndWellnessService],
})
export class HealthAndWellnessModule {}
