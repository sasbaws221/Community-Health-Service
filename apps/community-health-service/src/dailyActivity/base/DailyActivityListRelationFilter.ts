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
import { DailyActivityWhereInput } from "./DailyActivityWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DailyActivityListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DailyActivityWhereInput,
  })
  @ValidateNested()
  @Type(() => DailyActivityWhereInput)
  @IsOptional()
  @Field(() => DailyActivityWhereInput, {
    nullable: true,
  })
  every?: DailyActivityWhereInput;

  @ApiProperty({
    required: false,
    type: () => DailyActivityWhereInput,
  })
  @ValidateNested()
  @Type(() => DailyActivityWhereInput)
  @IsOptional()
  @Field(() => DailyActivityWhereInput, {
    nullable: true,
  })
  some?: DailyActivityWhereInput;

  @ApiProperty({
    required: false,
    type: () => DailyActivityWhereInput,
  })
  @ValidateNested()
  @Type(() => DailyActivityWhereInput)
  @IsOptional()
  @Field(() => DailyActivityWhereInput, {
    nullable: true,
  })
  none?: DailyActivityWhereInput;
}
export { DailyActivityListRelationFilter as DailyActivityListRelationFilter };
