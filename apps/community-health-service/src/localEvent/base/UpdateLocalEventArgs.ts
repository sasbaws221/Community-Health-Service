
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalEventWhereUniqueInput } from "./LocalEventWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LocalEventUpdateInput } from "./LocalEventUpdateInput";

@ArgsType()
class UpdateLocalEventArgs {
  @ApiProperty({
    required: true,
    type: () => LocalEventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocalEventWhereUniqueInput)
  @Field(() => LocalEventWhereUniqueInput, { nullable: false })
  where!: LocalEventWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LocalEventUpdateInput,
  })
  @ValidateNested()
  @Type(() => LocalEventUpdateInput)
  @Field(() => LocalEventUpdateInput, { nullable: false })
  data!: LocalEventUpdateInput;
}

export { UpdateLocalEventArgs as UpdateLocalEventArgs };
