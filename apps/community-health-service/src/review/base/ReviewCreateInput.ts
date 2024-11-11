
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationWhereUniqueInput } from "../../medication/base/MedicationWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumReviewProductType } from "./EnumReviewProductType";
import { EnumReviewRating } from "./EnumReviewRating";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ReviewCreateInput {
  @ApiProperty({
    required: false,
    type: () => MedicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicationWhereUniqueInput)
  @IsOptional()
  @Field(() => MedicationWhereUniqueInput, {
    nullable: true,
  })
  medication?: MedicationWhereUniqueInput | null;

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
  review?: string | null;

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

export { ReviewCreateInput as ReviewCreateInput };
