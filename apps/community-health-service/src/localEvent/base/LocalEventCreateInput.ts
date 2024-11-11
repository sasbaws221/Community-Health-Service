
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

import { CommentCreateNestedManyWithoutLocalEventsInput } from "./CommentCreateNestedManyWithoutLocalEventsInput";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutLocalEventsInput } from "./UserCreateNestedManyWithoutLocalEventsInput";

@InputType()
class LocalEventCreateInput {
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
    type: () => CommentCreateNestedManyWithoutLocalEventsInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutLocalEventsInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutLocalEventsInput, {
    nullable: true,
  })
  comment?: CommentCreateNestedManyWithoutLocalEventsInput;

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
    type: () => UserCreateNestedManyWithoutLocalEventsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutLocalEventsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutLocalEventsInput, {
    nullable: true,
  })
  user?: UserCreateNestedManyWithoutLocalEventsInput;
}

export { LocalEventCreateInput as LocalEventCreateInput };
