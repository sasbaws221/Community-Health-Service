import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WellnessGoalModuleBase } from "./base/wellnessGoal.module.base";
import { WellnessGoalService } from "./wellnessGoal.service";
import { WellnessGoalController } from "./wellnessGoal.controller";

@Module({
  imports: [WellnessGoalModuleBase, forwardRef(() => AuthModule)],
  controllers: [WellnessGoalController],
  providers: [WellnessGoalService],
  exports: [WellnessGoalService],
})
export class WellnessGoalModule {}
