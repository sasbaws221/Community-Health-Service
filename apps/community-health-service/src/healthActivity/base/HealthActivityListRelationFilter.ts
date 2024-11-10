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
import { HealthActivityWhereInput } from "./HealthActivityWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HealthActivityListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HealthActivityWhereInput,
  })
  @ValidateNested()
  @Type(() => HealthActivityWhereInput)
  @IsOptional()
  @Field(() => HealthActivityWhereInput, {
    nullable: true,
  })
  every?: HealthActivityWhereInput;

  @ApiProperty({
    required: false,
    type: () => HealthActivityWhereInput,
  })
  @ValidateNested()
  @Type(() => HealthActivityWhereInput)
  @IsOptional()
  @Field(() => HealthActivityWhereInput, {
    nullable: true,
  })
  some?: HealthActivityWhereInput;

  @ApiProperty({
    required: false,
    type: () => HealthActivityWhereInput,
  })
  @ValidateNested()
  @Type(() => HealthActivityWhereInput)
  @IsOptional()
  @Field(() => HealthActivityWhereInput, {
    nullable: true,
  })
  none?: HealthActivityWhereInput;
}
export { HealthActivityListRelationFilter as HealthActivityListRelationFilter };
