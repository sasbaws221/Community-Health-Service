/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { DiscussionWhereUniqueInput } from "../../discussion/base/DiscussionWhereUniqueInput";
import { Type } from "class-transformer";
import { HealthAndWellnessWhereUniqueInput } from "../../healthAndWellness/base/HealthAndWellnessWhereUniqueInput";
import { LocalEventWhereUniqueInput } from "../../localEvent/base/LocalEventWhereUniqueInput";
import { ResourcesAndAdviceWhereUniqueInput } from "../../resourcesAndAdvice/base/ResourcesAndAdviceWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class CommentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comments?: string | null;

  @ApiProperty({
    required: false,
    type: () => DiscussionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscussionWhereUniqueInput)
  @IsOptional()
  @Field(() => DiscussionWhereUniqueInput, {
    nullable: true,
  })
  discussions?: DiscussionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => HealthAndWellnessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HealthAndWellnessWhereUniqueInput)
  @IsOptional()
  @Field(() => HealthAndWellnessWhereUniqueInput, {
    nullable: true,
  })
  healthAndWellnesses?: HealthAndWellnessWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => LocalEventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocalEventWhereUniqueInput)
  @IsOptional()
  @Field(() => LocalEventWhereUniqueInput, {
    nullable: true,
  })
  localEvents?: LocalEventWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ResourcesAndAdviceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdviceWhereUniqueInput)
  @IsOptional()
  @Field(() => ResourcesAndAdviceWhereUniqueInput, {
    nullable: true,
  })
  resourcesAndAdvices?: ResourcesAndAdviceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { CommentCreateInput as CommentCreateInput };
