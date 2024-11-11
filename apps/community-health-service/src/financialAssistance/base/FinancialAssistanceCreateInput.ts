
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Max,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Decimal } from "decimal.js";
import { EnumFinancialAssistanceStatus } from "./EnumFinancialAssistanceStatus";
import { FinanceWhereUniqueInput } from "../../finance/base/FinanceWhereUniqueInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class FinancialAssistanceCreateInput {
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
  adminComments?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  amount?: Decimal | null;

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
    enum: EnumFinancialAssistanceStatus,
  })
  @IsEnum(EnumFinancialAssistanceStatus)
  @IsOptional()
  @Field(() => EnumFinancialAssistanceStatus, {
    nullable: true,
  })
  status?: "Pending" | "Approval" | "Rejected" | null;

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
  supportType?: FinanceWhereUniqueInput | null;

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
  user?: UserWhereUniqueInput | null;
}

export { FinancialAssistanceCreateInput as FinancialAssistanceCreateInput };
