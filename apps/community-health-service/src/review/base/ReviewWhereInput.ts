
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { MedicationWhereUniqueInput } from "../../medication/base/MedicationWhereUniqueInput";
import { EnumReviewProductType } from "./EnumReviewProductType";
import { EnumReviewRating } from "./EnumReviewRating";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ReviewWhereInput {
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
    type: () => MedicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicationWhereUniqueInput)
  @IsOptional()
  @Field(() => MedicationWhereUniqueInput, {
    nullable: true,
  })
  medication?: MedicationWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumReviewProductType,
  })
  @IsEnum(EnumReviewProductType)
  @IsOptional()
  @Field(() => EnumReviewProductType, {
    nullable: true,
  })
  productType?: "Doctor" | "Services" | "Medication";

  @ApiProperty({
    required: false,
    enum: EnumReviewRating,
  })
  @IsEnum(EnumReviewRating)
  @IsOptional()
  @Field(() => EnumReviewRating, {
    nullable: true,
  })
  rating?: "One" | "Two" | "Three" | "Four" | "Five";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  review?: StringNullableFilter;

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

export { ReviewWhereInput as ReviewWhereInput };
