
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthAndWellnessWhereInput } from "./HealthAndWellnessWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HealthAndWellnessListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HealthAndWellnessWhereInput,
  })
  @ValidateNested()
  @Type(() => HealthAndWellnessWhereInput)
  @IsOptional()
  @Field(() => HealthAndWellnessWhereInput, {
    nullable: true,
  })
  every?: HealthAndWellnessWhereInput;

  @ApiProperty({
    required: false,
    type: () => HealthAndWellnessWhereInput,
  })
  @ValidateNested()
  @Type(() => HealthAndWellnessWhereInput)
  @IsOptional()
  @Field(() => HealthAndWellnessWhereInput, {
    nullable: true,
  })
  some?: HealthAndWellnessWhereInput;

  @ApiProperty({
    required: false,
    type: () => HealthAndWellnessWhereInput,
  })
  @ValidateNested()
  @Type(() => HealthAndWellnessWhereInput)
  @IsOptional()
  @Field(() => HealthAndWellnessWhereInput, {
    nullable: true,
  })
  none?: HealthAndWellnessWhereInput;
}
export { HealthAndWellnessListRelationFilter as HealthAndWellnessListRelationFilter };
