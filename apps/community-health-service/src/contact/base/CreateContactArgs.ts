
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactCreateInput } from "./ContactCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateContactArgs {
  @ApiProperty({
    required: true,
    type: () => ContactCreateInput,
  })
  @ValidateNested()
  @Type(() => ContactCreateInput)
  @Field(() => ContactCreateInput, { nullable: false })
  data!: ContactCreateInput;
}

export { CreateContactArgs as CreateContactArgs };
