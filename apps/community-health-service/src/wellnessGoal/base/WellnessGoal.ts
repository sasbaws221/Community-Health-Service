
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsDate,
  IsNumber,
  Max,
  IsOptional,
  IsEnum,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { Decimal } from "decimal.js";
import { EnumWellnessGoalFrequency } from "./EnumWellnessGoalFrequency";
import { EnumWellnessGoalStatus } from "./EnumWellnessGoalStatus";
import { User } from "../../user/base/User";

@ObjectType()
class WellnessGoal {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  currentProgress!: Decimal | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate!: Date | null;

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
  goal!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate!: Date | null;

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
  targetValue!: Decimal | null;

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

export { WellnessGoal as WellnessGoal };
