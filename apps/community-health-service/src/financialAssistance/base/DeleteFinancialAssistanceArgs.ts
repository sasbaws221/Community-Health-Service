
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialAssistanceWhereUniqueInput } from "./FinancialAssistanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteFinancialAssistanceArgs {
  @ApiProperty({
    required: true,
    type: () => FinancialAssistanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FinancialAssistanceWhereUniqueInput)
  @Field(() => FinancialAssistanceWhereUniqueInput, { nullable: false })
  where!: FinancialAssistanceWhereUniqueInput;
}

export { DeleteFinancialAssistanceArgs as DeleteFinancialAssistanceArgs };
