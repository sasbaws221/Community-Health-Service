import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiscussionModuleBase } from "./base/discussion.module.base";
import { DiscussionService } from "./discussion.service";
import { DiscussionController } from "./discussion.controller";
import { DiscussionResolver } from "./discussion.resolver";

@Module({
  imports: [DiscussionModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiscussionController],
  providers: [DiscussionService, DiscussionResolver],
  exports: [DiscussionService],
})
export class DiscussionModule {}
