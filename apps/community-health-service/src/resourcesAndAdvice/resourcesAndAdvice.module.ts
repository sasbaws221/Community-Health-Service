import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResourcesAndAdviceModuleBase } from "./base/resourcesAndAdvice.module.base";
import { ResourcesAndAdviceService } from "./resourcesAndAdvice.service";
import { ResourcesAndAdviceController } from "./resourcesAndAdvice.controller";

@Module({
  imports: [ResourcesAndAdviceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResourcesAndAdviceController],
  providers: [ResourcesAndAdviceService],
  exports: [ResourcesAndAdviceService],
})
export class ResourcesAndAdviceModule {}
