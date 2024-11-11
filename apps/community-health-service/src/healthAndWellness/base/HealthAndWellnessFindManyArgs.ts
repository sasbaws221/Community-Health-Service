
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthAndWellnessWhereInput } from "./HealthAndWellnessWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HealthAndWellnessOrderByInput } from "./HealthAndWellnessOrderByInput";

@ArgsType()
class HealthAndWellnessFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HealthAndWellnessWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HealthAndWellnessWhereInput, { nullable: true })
  @Type(() => HealthAndWellnessWhereInput)
  where?: HealthAndWellnessWhereInput;

  @ApiProperty({
    required: false,
    type: [HealthAndWellnessOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HealthAndWellnessOrderByInput], { nullable: true })
  @Type(() => HealthAndWellnessOrderByInput)
  orderBy?: Array<HealthAndWellnessOrderByInput>;

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

export { HealthAndWellnessFindManyArgs as HealthAndWellnessFindManyArgs };
