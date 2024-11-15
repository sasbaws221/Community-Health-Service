
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  ValidateNested,
  IsOptional,
  IsEnum,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { Medication } from "../../medication/base/Medication";
import { EnumReviewProductType } from "./EnumReviewProductType";
import { EnumReviewRating } from "./EnumReviewRating";
import { User } from "../../user/base/User";

@ObjectType()
class Review {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Medication,
  })
  @ValidateNested()
  @Type(() => Medication)
  @IsOptional()
  medication?: Medication | null;

  @ApiProperty({
    required: false,
    enum: EnumReviewProductType,
  })
  @IsEnum(EnumReviewProductType)
  @IsOptional()
  @Field(() => EnumReviewProductType, {
    nullable: true,
  })
  productType?: "Doctor" | "Services" | "Medication" | null;

  @ApiProperty({
    required: false,
    enum: EnumReviewRating,
  })
  @IsEnum(EnumReviewRating)
  @IsOptional()
  @Field(() => EnumReviewRating, {
    nullable: true,
  })
  rating?: "One" | "Two" | "Three" | "Four" | "Five" | null;

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
  review!: string | null;

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

export { Review as Review };
