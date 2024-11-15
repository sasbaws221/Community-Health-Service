
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnumWellnessGoalFrequency } from "./EnumWellnessGoalFrequency";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumWellnessGoalStatus } from "./EnumWellnessGoalStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WellnessGoalWhereInput {
  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  currentProgress?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  endDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumWellnessGoalFrequency,
  })
  @IsEnum(EnumWellnessGoalFrequency)
  @IsOptional()
  @Field(() => EnumWellnessGoalFrequency, {
    nullable: true,
  })
  frequency?: "Daily" | "Weekly" | "Monthly";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  goal?: StringNullableFilter;

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
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  startDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumWellnessGoalStatus,
  })
  @IsEnum(EnumWellnessGoalStatus)
  @IsOptional()
  @Field(() => EnumWellnessGoalStatus, {
    nullable: true,
  })
  status?: "InProgress" | "Completed" | "Paused" | "Cancelled";

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  targetValue?: DecimalNullableFilter;

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

export { WellnessGoalWhereInput as WellnessGoalWhereInput };
