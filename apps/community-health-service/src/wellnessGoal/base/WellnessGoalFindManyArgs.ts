
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WellnessGoalWhereInput } from "./WellnessGoalWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WellnessGoalOrderByInput } from "./WellnessGoalOrderByInput";

@ArgsType()
class WellnessGoalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WellnessGoalWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WellnessGoalWhereInput, { nullable: true })
  @Type(() => WellnessGoalWhereInput)
  where?: WellnessGoalWhereInput;

  @ApiProperty({
    required: false,
    type: [WellnessGoalOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WellnessGoalOrderByInput], { nullable: true })
  @Type(() => WellnessGoalOrderByInput)
  orderBy?: Array<WellnessGoalOrderByInput>;

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

export { WellnessGoalFindManyArgs as WellnessGoalFindManyArgs };
