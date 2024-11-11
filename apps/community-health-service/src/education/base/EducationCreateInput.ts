
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumEducationDescription } from "./EnumEducationDescription";
import { EnumEducationDifficultyLevel } from "./EnumEducationDifficultyLevel";
import { UserCreateNestedManyWithoutEducationsInput } from "./UserCreateNestedManyWithoutEducationsInput";

@InputType()
class EducationCreateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumEducationDescription,
  })
  @IsEnum(EnumEducationDescription)
  @IsOptional()
  @Field(() => EnumEducationDescription, {
    nullable: true,
  })
  description?:
    | "MentalHealth"
    | "Nutrition"
    | "Fitness"
    | "ChronicCondition"
    | "GeneralHealth"
    | "SelfCare"
    | null;

  @ApiProperty({
    required: false,
    enum: EnumEducationDifficultyLevel,
  })
  @IsEnum(EnumEducationDifficultyLevel)
  @IsOptional()
  @Field(() => EnumEducationDifficultyLevel, {
    nullable: true,
  })
  difficultyLevel?: "Beginner" | "Intermediate" | "Advanced" | null;

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
  duration?: string | null;

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
  link?: string | null;

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
    type: () => UserCreateNestedManyWithoutEducationsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutEducationsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutEducationsInput, {
    nullable: true,
  })
  user?: UserCreateNestedManyWithoutEducationsInput;
}

export { EducationCreateInput as EducationCreateInput };
