
import { InputType, Field } from "@nestjs/graphql";
import { FinancialAssistanceWhereUniqueInput } from "../../financialAssistance/base/FinancialAssistanceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FinancialAssistanceCreateNestedManyWithoutUsersInput {
  @Field(() => [FinancialAssistanceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FinancialAssistanceWhereUniqueInput],
  })
  connect?: Array<FinancialAssistanceWhereUniqueInput>;
}

export { FinancialAssistanceCreateNestedManyWithoutUsersInput as FinancialAssistanceCreateNestedManyWithoutUsersInput };
