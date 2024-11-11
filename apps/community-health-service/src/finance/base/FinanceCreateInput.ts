
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { FinancialAssistanceWhereUniqueInput } from "../../financialAssistance/base/FinancialAssistanceWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class FinanceCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

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
  financialAssistances?: FinancialAssistanceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  supportName?: string | null;
}

export { FinanceCreateInput as FinanceCreateInput };
