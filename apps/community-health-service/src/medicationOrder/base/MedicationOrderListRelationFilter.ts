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
import { MedicationOrderWhereInput } from "./MedicationOrderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MedicationOrderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MedicationOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => MedicationOrderWhereInput)
  @IsOptional()
  @Field(() => MedicationOrderWhereInput, {
    nullable: true,
  })
  every?: MedicationOrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => MedicationOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => MedicationOrderWhereInput)
  @IsOptional()
  @Field(() => MedicationOrderWhereInput, {
    nullable: true,
  })
  some?: MedicationOrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => MedicationOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => MedicationOrderWhereInput)
  @IsOptional()
  @Field(() => MedicationOrderWhereInput, {
    nullable: true,
  })
  none?: MedicationOrderWhereInput;
}
export { MedicationOrderListRelationFilter as MedicationOrderListRelationFilter };
