
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
  IsNumber,
  Max,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { EnumDailyActivityMood } from "./EnumDailyActivityMood";
import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class DailyActivityUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

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
  exercise?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  meals?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDailyActivityMood,
  })
  @IsEnum(EnumDailyActivityMood)
  @IsOptional()
  @Field(() => EnumDailyActivityMood, {
    nullable: true,
  })
  mood?: "Happy" | "Neutral" | "Sad" | "Stressed" | "Energetic" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note?: string | null;

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
  sleepHours?: Decimal | null;

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
  waterIntake?: Decimal | null;
}

export { DailyActivityUpdateInput as DailyActivityUpdateInput };
