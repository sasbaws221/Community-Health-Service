/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FinancialAssistanceWhereUniqueInput } from "../../financialAssistance/base/FinancialAssistanceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FinancialAssistanceUpdateManyWithoutUsersInput {
  @Field(() => [FinancialAssistanceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FinancialAssistanceWhereUniqueInput],
  })
  connect?: Array<FinancialAssistanceWhereUniqueInput>;

  @Field(() => [FinancialAssistanceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FinancialAssistanceWhereUniqueInput],
  })
  disconnect?: Array<FinancialAssistanceWhereUniqueInput>;

  @Field(() => [FinancialAssistanceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FinancialAssistanceWhereUniqueInput],
  })
  set?: Array<FinancialAssistanceWhereUniqueInput>;
}

export { FinancialAssistanceUpdateManyWithoutUsersInput as FinancialAssistanceUpdateManyWithoutUsersInput };
