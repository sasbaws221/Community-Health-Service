
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsNumber,
  Max,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";

import { Decimal } from "decimal.js";
import { Type } from "class-transformer";
import { EnumWellnessGoalFrequency } from "./EnumWellnessGoalFrequency";
import { EnumWellnessGoalStatus } from "./EnumWellnessGoalStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WellnessGoalUpdateInput {
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
  currentProgress?: Decimal | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumWellnessGoalFrequency,
  })
  @IsEnum(EnumWellnessGoalFrequency)
  @IsOptional()
  @Field(() => EnumWellnessGoalFrequency, {
    nullable: true,
  })
  frequency?: "Daily" | "Weekly" | "Monthly" | null;

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
  goal?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumWellnessGoalStatus,
  })
  @IsEnum(EnumWellnessGoalStatus)
  @IsOptional()
  @Field(() => EnumWellnessGoalStatus, {
    nullable: true,
  })
  status?: "InProgress" | "Completed" | "Paused" | "Cancelled" | null;

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
  targetValue?: Decimal | null;

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

export { WellnessGoalUpdateInput as WellnessGoalUpdateInput };
