
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DailyActivityWhereInput } from "./DailyActivityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DailyActivityOrderByInput } from "./DailyActivityOrderByInput";

@ArgsType()
class DailyActivityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DailyActivityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DailyActivityWhereInput, { nullable: true })
  @Type(() => DailyActivityWhereInput)
  where?: DailyActivityWhereInput;

  @ApiProperty({
    required: false,
    type: [DailyActivityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DailyActivityOrderByInput], { nullable: true })
  @Type(() => DailyActivityOrderByInput)
  orderBy?: Array<DailyActivityOrderByInput>;

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

export { DailyActivityFindManyArgs as DailyActivityFindManyArgs };
