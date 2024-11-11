
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
