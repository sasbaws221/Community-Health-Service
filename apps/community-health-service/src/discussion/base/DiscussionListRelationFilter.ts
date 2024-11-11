
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscussionWhereInput } from "./DiscussionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DiscussionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DiscussionWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscussionWhereInput)
  @IsOptional()
  @Field(() => DiscussionWhereInput, {
    nullable: true,
  })
  every?: DiscussionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiscussionWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscussionWhereInput)
  @IsOptional()
  @Field(() => DiscussionWhereInput, {
    nullable: true,
  })
  some?: DiscussionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiscussionWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscussionWhereInput)
  @IsOptional()
  @Field(() => DiscussionWhereInput, {
    nullable: true,
  })
  none?: DiscussionWhereInput;
}
export { DiscussionListRelationFilter as DiscussionListRelationFilter };
