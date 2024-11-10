import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewModuleBase } from "./base/review.module.base";
import { ReviewService } from "./review.service";
import { ReviewController } from "./review.controller";

@Module({
  imports: [ReviewModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService],
})
export class ReviewModule {}
