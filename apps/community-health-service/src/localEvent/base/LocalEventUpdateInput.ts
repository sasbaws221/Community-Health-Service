
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumLocalEventCategory } from "./EnumLocalEventCategory";

import {
  IsEnum,
  IsOptional,
  ValidateNested,
  IsInt,
  Max,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";

import { CommentUpdateManyWithoutLocalEventsInput } from "./CommentUpdateManyWithoutLocalEventsInput";
import { Type } from "class-transformer";
import { UserUpdateManyWithoutLocalEventsInput } from "./UserUpdateManyWithoutLocalEventsInput";

@InputType()
class LocalEventUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumLocalEventCategory,
  })
  @IsEnum(EnumLocalEventCategory)
  @IsOptional()
  @Field(() => EnumLocalEventCategory, {
    nullable: true,
  })
  category?:
    | "Workshop"
    | "SupportGroup"
    | "HealthScreening"
    | "Seminar"
    | "ExerciseClass"
    | null;

  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutLocalEventsInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutLocalEventsInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutLocalEventsInput, {
    nullable: true,
  })
  comment?: CommentUpdateManyWithoutLocalEventsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  contact?: number | null;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  eventDate?: Date | null;

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
  location?: string | null;

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
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutLocalEventsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutLocalEventsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutLocalEventsInput, {
    nullable: true,
  })
  user?: UserUpdateManyWithoutLocalEventsInput;
}

export { LocalEventUpdateInput as LocalEventUpdateInput };
