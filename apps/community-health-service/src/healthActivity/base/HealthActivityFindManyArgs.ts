
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthActivityWhereInput } from "./HealthActivityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HealthActivityOrderByInput } from "./HealthActivityOrderByInput";

@ArgsType()
class HealthActivityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HealthActivityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HealthActivityWhereInput, { nullable: true })
  @Type(() => HealthActivityWhereInput)
  where?: HealthActivityWhereInput;

  @ApiProperty({
    required: false,
    type: [HealthActivityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HealthActivityOrderByInput], { nullable: true })
  @Type(() => HealthActivityOrderByInput)
  orderBy?: Array<HealthActivityOrderByInput>;

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

export { HealthActivityFindManyArgs as HealthActivityFindManyArgs };
