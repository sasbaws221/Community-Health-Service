
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ContactUpdateInput } from "./ContactUpdateInput";

@ArgsType()
class UpdateContactArgs {
  @ApiProperty({
    required: true,
    type: () => ContactWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactWhereUniqueInput)
  @Field(() => ContactWhereUniqueInput, { nullable: false })
  where!: ContactWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ContactUpdateInput,
  })
  @ValidateNested()
  @Type(() => ContactUpdateInput)
  @Field(() => ContactUpdateInput, { nullable: false })
  data!: ContactUpdateInput;
}

export { UpdateContactArgs as UpdateContactArgs };
