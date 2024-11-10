/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
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
