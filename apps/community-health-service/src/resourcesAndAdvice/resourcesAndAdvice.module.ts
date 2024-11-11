import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResourcesAndAdviceModuleBase } from "./base/resourcesAndAdvice.module.base";
import { ResourcesAndAdviceService } from "./resourcesAndAdvice.service";
import { ResourcesAndAdviceController } from "./resourcesAndAdvice.controller";
import { ResourcesAndAdviceResolver } from "./resourcesAndAdvice.resolver";

@Module({
  imports: [ResourcesAndAdviceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResourcesAndAdviceController],
  providers: [ResourcesAndAdviceService, ResourcesAndAdviceResolver],
  exports: [ResourcesAndAdviceService],
})
export class ResourcesAndAdviceModule {}
