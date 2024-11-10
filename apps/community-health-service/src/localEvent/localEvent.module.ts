import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LocalEventModuleBase } from "./base/localEvent.module.base";
import { LocalEventService } from "./localEvent.service";
import { LocalEventController } from "./localEvent.controller";

@Module({
  imports: [LocalEventModuleBase, forwardRef(() => AuthModule)],
  controllers: [LocalEventController],
  providers: [LocalEventService],
  exports: [LocalEventService],
})
export class LocalEventModule {}