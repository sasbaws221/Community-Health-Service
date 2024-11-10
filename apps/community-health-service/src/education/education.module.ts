import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EducationModuleBase } from "./base/education.module.base";
import { EducationService } from "./education.service";
import { EducationController } from "./education.controller";

@Module({
  imports: [EducationModuleBase, forwardRef(() => AuthModule)],
  controllers: [EducationController],
  providers: [EducationService],
  exports: [EducationService],
})
export class EducationModule {}
