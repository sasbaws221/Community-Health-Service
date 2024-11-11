
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialAssistanceWhereUniqueInput } from "./FinancialAssistanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FinancialAssistanceUpdateInput } from "./FinancialAssistanceUpdateInput";

@ArgsType()
class UpdateFinancialAssistanceArgs {
  @ApiProperty({
    required: true,
    type: () => FinancialAssistanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FinancialAssistanceWhereUniqueInput)
  @Field(() => FinancialAssistanceWhereUniqueInput, { nullable: false })
  where!: FinancialAssistanceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FinancialAssistanceUpdateInput,
  })
  @ValidateNested()
  @Type(() => FinancialAssistanceUpdateInput)
  @Field(() => FinancialAssistanceUpdateInput, { nullable: false })
  data!: FinancialAssistanceUpdateInput;
}

export { UpdateFinancialAssistanceArgs as UpdateFinancialAssistanceArgs };
