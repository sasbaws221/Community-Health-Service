/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { MedicationOrderCreateNestedManyWithoutMedicationsInput } from "./MedicationOrderCreateNestedManyWithoutMedicationsInput";
import { Type } from "class-transformer";
import { ReviewCreateNestedManyWithoutMedicationsInput } from "./ReviewCreateNestedManyWithoutMedicationsInput";

@InputType()
class MedicationCreateInput {
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
    type: () => MedicationOrderCreateNestedManyWithoutMedicationsInput,
  })
  @ValidateNested()
  @Type(() => MedicationOrderCreateNestedManyWithoutMedicationsInput)
  @IsOptional()
  @Field(() => MedicationOrderCreateNestedManyWithoutMedicationsInput, {
    nullable: true,
  })
  medicationOrders?: MedicationOrderCreateNestedManyWithoutMedicationsInput;

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
    type: () => ReviewCreateNestedManyWithoutMedicationsInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutMedicationsInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutMedicationsInput, {
    nullable: true,
  })
  reviews?: ReviewCreateNestedManyWithoutMedicationsInput;

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

export { MedicationCreateInput as MedicationCreateInput };