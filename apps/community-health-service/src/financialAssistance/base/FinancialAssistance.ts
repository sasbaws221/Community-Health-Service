
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Max,
  IsDate,
  IsEnum,
  ValidateNested,
} from "class-validator";

import { Decimal } from "decimal.js";
import { Type } from "class-transformer";
import { EnumFinancialAssistanceStatus } from "./EnumFinancialAssistanceStatus";
import { Finance } from "../../finance/base/Finance";
import { User } from "../../user/base/User";

@ObjectType()
class FinancialAssistance {
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
  adminComments!: string | null;

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
  amount!: Decimal | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  description!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
    type: () => Finance,
  })
  @ValidateNested()
  @Type(() => Finance)
  @IsOptional()
  supportType?: Finance | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { FinancialAssistance as FinancialAssistance };
