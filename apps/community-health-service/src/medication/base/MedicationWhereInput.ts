
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { MedicationOrderListRelationFilter } from "../../medicationOrder/base/MedicationOrderListRelationFilter";
import { ReviewListRelationFilter } from "../../review/base/ReviewListRelationFilter";

@InputType()
class MedicationWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  category?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

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
    type: () => MedicationOrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MedicationOrderListRelationFilter)
  @IsOptional()
  @Field(() => MedicationOrderListRelationFilter, {
    nullable: true,
  })
  medicationOrders?: MedicationOrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  recommendedFor?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ReviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReviewListRelationFilter)
  @IsOptional()
  @Field(() => ReviewListRelationFilter, {
    nullable: true,
  })
  reviews?: ReviewListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  sideEffects?: StringNullableFilter;
}

export { MedicationWhereInput as MedicationWhereInput };
