
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { MedicationListRelationFilter } from "../../medication/base/MedicationListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EnumMedicationOrderStatus } from "./EnumMedicationOrderStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class MedicationOrderWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  deliveredAt?: DateTimeNullableFilter;

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
    type: () => MedicationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MedicationListRelationFilter)
  @IsOptional()
  @Field(() => MedicationListRelationFilter, {
    nullable: true,
  })
  medication?: MedicationListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  orderedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  quantity?: IntNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumMedicationOrderStatus,
  })
  @IsEnum(EnumMedicationOrderStatus)
  @IsOptional()
  @Field(() => EnumMedicationOrderStatus, {
    nullable: true,
  })
  status?: "Pending" | "Shipped" | "Delivered" | "Cancelled";

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

export { MedicationOrderWhereInput as MedicationOrderWhereInput };
