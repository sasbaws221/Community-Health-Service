/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourcesAndAdviceWhereInput } from "./ResourcesAndAdviceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ResourcesAndAdviceOrderByInput } from "./ResourcesAndAdviceOrderByInput";

@ArgsType()
class ResourcesAndAdviceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ResourcesAndAdviceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ResourcesAndAdviceWhereInput, { nullable: true })
  @Type(() => ResourcesAndAdviceWhereInput)
  where?: ResourcesAndAdviceWhereInput;

  @ApiProperty({
    required: false,
    type: [ResourcesAndAdviceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ResourcesAndAdviceOrderByInput], { nullable: true })
  @Type(() => ResourcesAndAdviceOrderByInput)
  orderBy?: Array<ResourcesAndAdviceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ResourcesAndAdviceFindManyArgs as ResourcesAndAdviceFindManyArgs };
