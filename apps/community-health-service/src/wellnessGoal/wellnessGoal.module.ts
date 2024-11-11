import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WellnessGoalModuleBase } from "./base/wellnessGoal.module.base";
import { WellnessGoalService } from "./wellnessGoal.service";
import { WellnessGoalController } from "./wellnessGoal.controller";
import { WellnessGoalResolver } from "./wellnessGoal.resolver";

@Module({
  imports: [WellnessGoalModuleBase, forwardRef(() => AuthModule)],
  controllers: [WellnessGoalController],
  providers: [WellnessGoalService, WellnessGoalResolver],
  exports: [WellnessGoalService],
})
export class WellnessGoalModule {}
