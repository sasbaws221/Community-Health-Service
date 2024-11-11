
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactWhereInput } from "./ContactWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ContactCountArgs {
  @ApiProperty({
    required: false,
    type: () => ContactWhereInput,
  })
  @Field(() => ContactWhereInput, { nullable: true })
  @Type(() => ContactWhereInput)
  where?: ContactWhereInput;
}

export { ContactCountArgs as ContactCountArgs };
