
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourcesAndAdviceWhereInput } from "./ResourcesAndAdviceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ResourcesAndAdviceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ResourcesAndAdviceWhereInput,
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdviceWhereInput)
  @IsOptional()
  @Field(() => ResourcesAndAdviceWhereInput, {
    nullable: true,
  })
  every?: ResourcesAndAdviceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResourcesAndAdviceWhereInput,
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdviceWhereInput)
  @IsOptional()
  @Field(() => ResourcesAndAdviceWhereInput, {
    nullable: true,
  })
  some?: ResourcesAndAdviceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResourcesAndAdviceWhereInput,
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdviceWhereInput)
  @IsOptional()
  @Field(() => ResourcesAndAdviceWhereInput, {
    nullable: true,
  })
  none?: ResourcesAndAdviceWhereInput;
}
export { ResourcesAndAdviceListRelationFilter as ResourcesAndAdviceListRelationFilter };
