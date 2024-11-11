
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialAssistanceCreateInput } from "./FinancialAssistanceCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateFinancialAssistanceArgs {
  @ApiProperty({
    required: true,
    type: () => FinancialAssistanceCreateInput,
  })
  @ValidateNested()
  @Type(() => FinancialAssistanceCreateInput)
  @Field(() => FinancialAssistanceCreateInput, { nullable: false })
  data!: FinancialAssistanceCreateInput;
}

export { CreateFinancialAssistanceArgs as CreateFinancialAssistanceArgs };
