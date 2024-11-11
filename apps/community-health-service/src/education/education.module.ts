import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EducationModuleBase } from "./base/education.module.base";
import { EducationService } from "./education.service";
import { EducationController } from "./education.controller";
import { EducationResolver } from "./education.resolver";

@Module({
  imports: [EducationModuleBase, forwardRef(() => AuthModule)],
  controllers: [EducationController],
  providers: [EducationService, EducationResolver],
  exports: [EducationService],
})
export class EducationModule {}
