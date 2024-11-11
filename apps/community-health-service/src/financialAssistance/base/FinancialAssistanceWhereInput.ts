
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumFinancialAssistanceStatus } from "./EnumFinancialAssistanceStatus";
import { FinanceWhereUniqueInput } from "../../finance/base/FinanceWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class FinancialAssistanceWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  adminComments?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  amount?: DecimalNullableFilter;

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
    enum: EnumFinancialAssistanceStatus,
  })
  @IsEnum(EnumFinancialAssistanceStatus)
  @IsOptional()
  @Field(() => EnumFinancialAssistanceStatus, {
    nullable: true,
  })
  status?: "Pending" | "Approval" | "Rejected";

  @ApiProperty({
    required: false,
    type: () => FinanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FinanceWhereUniqueInput)
  @IsOptional()
  @Field(() => FinanceWhereUniqueInput, {
    nullable: true,
  })
  supportType?: FinanceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { FinancialAssistanceWhereInput as FinancialAssistanceWhereInput };
