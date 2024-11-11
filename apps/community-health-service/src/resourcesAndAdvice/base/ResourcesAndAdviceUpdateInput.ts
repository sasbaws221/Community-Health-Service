
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { Type } from "class-transformer";
import { CommentUpdateManyWithoutResourcesAndAdvicesInput } from "./CommentUpdateManyWithoutResourcesAndAdvicesInput";
import { UserUpdateManyWithoutResourcesAndAdvicesInput } from "./UserUpdateManyWithoutResourcesAndAdvicesInput";

@InputType()
class ResourcesAndAdviceUpdateInput {
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
  author?: string | null;

  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutResourcesAndAdvicesInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutResourcesAndAdvicesInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutResourcesAndAdvicesInput, {
    nullable: true,
  })
  comment?: CommentUpdateManyWithoutResourcesAndAdvicesInput;

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
  content?: string | null;

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
  link?: string | null;

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
  tag?: string | null;

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
    type: () => UserUpdateManyWithoutResourcesAndAdvicesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutResourcesAndAdvicesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutResourcesAndAdvicesInput, {
    nullable: true,
  })
  user?: UserUpdateManyWithoutResourcesAndAdvicesInput;
}

export { ResourcesAndAdviceUpdateInput as ResourcesAndAdviceUpdateInput };
