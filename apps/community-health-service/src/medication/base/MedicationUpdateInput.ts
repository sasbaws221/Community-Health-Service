
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { MedicationOrderUpdateManyWithoutMedicationsInput } from "./MedicationOrderUpdateManyWithoutMedicationsInput";
import { Type } from "class-transformer";
import { ReviewUpdateManyWithoutMedicationsInput } from "./ReviewUpdateManyWithoutMedicationsInput";

@InputType()
class MedicationUpdateInput {
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
  category?: string | null;

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
    type: () => MedicationOrderUpdateManyWithoutMedicationsInput,
  })
  @ValidateNested()
  @Type(() => MedicationOrderUpdateManyWithoutMedicationsInput)
  @IsOptional()
  @Field(() => MedicationOrderUpdateManyWithoutMedicationsInput, {
    nullable: true,
  })
  medicationOrders?: MedicationOrderUpdateManyWithoutMedicationsInput;

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
  name?: string | null;

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
  recommendedFor?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutMedicationsInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutMedicationsInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutMedicationsInput, {
    nullable: true,
  })
  reviews?: ReviewUpdateManyWithoutMedicationsInput;

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
  sideEffects?: string | null;
}

export { MedicationUpdateInput as MedicationUpdateInput };
