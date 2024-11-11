
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Category } from "../../category/base/Category";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumEducationDescription } from "./EnumEducationDescription";
import { EnumEducationDifficultyLevel } from "./EnumEducationDifficultyLevel";
import { User } from "../../user/base/User";

@ObjectType()
class Education {
  @ApiProperty({
    required: false,
    type: () => Category,
  })
  @ValidateNested()
  @Type(() => Category)
  @IsOptional()
  category?: Category | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  duration!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  link!: string | null;

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
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: Array<User>;
}

export { Education as Education };
