
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialAssistanceWhereInput } from "./FinancialAssistanceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FinancialAssistanceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FinancialAssistanceWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialAssistanceWhereInput)
  @IsOptional()
  @Field(() => FinancialAssistanceWhereInput, {
    nullable: true,
  })
  every?: FinancialAssistanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinancialAssistanceWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialAssistanceWhereInput)
  @IsOptional()
  @Field(() => FinancialAssistanceWhereInput, {
    nullable: true,
  })
  some?: FinancialAssistanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinancialAssistanceWhereInput,
  })
  @ValidateNested()
  @Type(() => FinancialAssistanceWhereInput)
  @IsOptional()
  @Field(() => FinancialAssistanceWhereInput, {
    nullable: true,
  })
  none?: FinancialAssistanceWhereInput;
}
export { FinancialAssistanceListRelationFilter as FinancialAssistanceListRelationFilter };
