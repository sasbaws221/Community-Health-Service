
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalEventWhereUniqueInput } from "./LocalEventWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteLocalEventArgs {
  @ApiProperty({
    required: true,
    type: () => LocalEventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocalEventWhereUniqueInput)
  @Field(() => LocalEventWhereUniqueInput, { nullable: false })
  where!: LocalEventWhereUniqueInput;
}

export { DeleteLocalEventArgs as DeleteLocalEventArgs };
