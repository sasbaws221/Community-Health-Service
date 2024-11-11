
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteContactArgs {
  @ApiProperty({
    required: true,
    type: () => ContactWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactWhereUniqueInput)
  @Field(() => ContactWhereUniqueInput, { nullable: false })
  where!: ContactWhereUniqueInput;
}

export { DeleteContactArgs as DeleteContactArgs };
