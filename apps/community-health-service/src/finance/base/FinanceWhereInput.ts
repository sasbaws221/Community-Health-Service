
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { FinancialAssistanceWhereUniqueInput } from "../../financialAssistance/base/FinancialAssistanceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class FinanceWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FinancialAssistanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FinancialAssistanceWhereUniqueInput)
  @IsOptional()
  @Field(() => FinancialAssistanceWhereUniqueInput, {
    nullable: true,
  })
  financialAssistances?: FinancialAssistanceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  supportName?: StringNullableFilter;
}

export { FinanceWhereInput as FinanceWhereInput };
