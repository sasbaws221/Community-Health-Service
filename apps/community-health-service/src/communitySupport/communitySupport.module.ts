import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommunitySupportModuleBase } from "./base/communitySupport.module.base";
import { CommunitySupportService } from "./communitySupport.service";
import { CommunitySupportController } from "./communitySupport.controller";

@Module({
  imports: [CommunitySupportModuleBase, forwardRef(() => AuthModule)],
  controllers: [CommunitySupportController],
  providers: [CommunitySupportService],
  exports: [CommunitySupportService],
})
export class CommunitySupportModule {}
