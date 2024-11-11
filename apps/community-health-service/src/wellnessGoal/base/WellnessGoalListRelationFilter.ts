
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WellnessGoalWhereInput } from "./WellnessGoalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WellnessGoalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WellnessGoalWhereInput,
  })
  @ValidateNested()
  @Type(() => WellnessGoalWhereInput)
  @IsOptional()
  @Field(() => WellnessGoalWhereInput, {
    nullable: true,
  })
  every?: WellnessGoalWhereInput;

  @ApiProperty({
    required: false,
    type: () => WellnessGoalWhereInput,
  })
  @ValidateNested()
  @Type(() => WellnessGoalWhereInput)
  @IsOptional()
  @Field(() => WellnessGoalWhereInput, {
    nullable: true,
  })
  some?: WellnessGoalWhereInput;

  @ApiProperty({
    required: false,
    type: () => WellnessGoalWhereInput,
  })
  @ValidateNested()
  @Type(() => WellnessGoalWhereInput)
  @IsOptional()
  @Field(() => WellnessGoalWhereInput, {
    nullable: true,
  })
  none?: WellnessGoalWhereInput;
}
export { WellnessGoalListRelationFilter as WellnessGoalListRelationFilter };
