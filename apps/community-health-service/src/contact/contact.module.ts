import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContactModuleBase } from "./base/contact.module.base";
import { ContactService } from "./contact.service";
import { ContactController } from "./contact.controller";

@Module({
  imports: [ContactModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService],
})
export class ContactModule {}
