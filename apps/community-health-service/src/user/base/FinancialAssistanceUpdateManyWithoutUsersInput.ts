
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
