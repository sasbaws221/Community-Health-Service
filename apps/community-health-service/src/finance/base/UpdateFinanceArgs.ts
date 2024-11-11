
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinanceWhereUniqueInput } from "./FinanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FinanceUpdateInput } from "./FinanceUpdateInput";

@ArgsType()
class UpdateFinanceArgs {
  @ApiProperty({
    required: true,
    type: () => FinanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FinanceWhereUniqueInput)
  @Field(() => FinanceWhereUniqueInput, { nullable: false })
  where!: FinanceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FinanceUpdateInput,
  })
  @ValidateNested()
  @Type(() => FinanceUpdateInput)
  @Field(() => FinanceUpdateInput, { nullable: false })
  data!: FinanceUpdateInput;
}

export { UpdateFinanceArgs as UpdateFinanceArgs };
