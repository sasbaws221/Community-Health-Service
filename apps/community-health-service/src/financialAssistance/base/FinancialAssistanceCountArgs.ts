
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialAssistanceWhereInput } from "./FinancialAssistanceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class FinancialAssistanceCountArgs {
  @ApiProperty({
    required: false,
    type: () => FinancialAssistanceWhereInput,
  })
  @Field(() => FinancialAssistanceWhereInput, { nullable: true })
  @Type(() => FinancialAssistanceWhereInput)
  where?: FinancialAssistanceWhereInput;
}

export { FinancialAssistanceCountArgs as FinancialAssistanceCountArgs };
