
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewWhereInput } from "./ReviewWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ReviewOrderByInput } from "./ReviewOrderByInput";

@ArgsType()
class ReviewFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReviewWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  where?: ReviewWhereInput;

  @ApiProperty({
    required: false,
    type: [ReviewOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ReviewOrderByInput], { nullable: true })
  @Type(() => ReviewOrderByInput)
  orderBy?: Array<ReviewOrderByInput>;

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

export { ReviewFindManyArgs as ReviewFindManyArgs };
