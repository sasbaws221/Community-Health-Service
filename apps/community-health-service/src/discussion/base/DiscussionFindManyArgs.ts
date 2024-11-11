
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscussionWhereInput } from "./DiscussionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DiscussionOrderByInput } from "./DiscussionOrderByInput";

@ArgsType()
class DiscussionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DiscussionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DiscussionWhereInput, { nullable: true })
  @Type(() => DiscussionWhereInput)
  where?: DiscussionWhereInput;

  @ApiProperty({
    required: false,
    type: [DiscussionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DiscussionOrderByInput], { nullable: true })
  @Type(() => DiscussionOrderByInput)
  orderBy?: Array<DiscussionOrderByInput>;

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

export { DiscussionFindManyArgs as DiscussionFindManyArgs };
