
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
import { CommentCreateNestedManyWithoutResourcesAndAdvicesInput } from "./CommentCreateNestedManyWithoutResourcesAndAdvicesInput";
import { UserCreateNestedManyWithoutResourcesAndAdvicesInput } from "./UserCreateNestedManyWithoutResourcesAndAdvicesInput";

@InputType()
class ResourcesAndAdviceCreateInput {
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
    type: () => CommentCreateNestedManyWithoutResourcesAndAdvicesInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutResourcesAndAdvicesInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutResourcesAndAdvicesInput, {
    nullable: true,
  })
  comment?: CommentCreateNestedManyWithoutResourcesAndAdvicesInput;

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
    type: () => UserCreateNestedManyWithoutResourcesAndAdvicesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutResourcesAndAdvicesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutResourcesAndAdvicesInput, {
    nullable: true,
  })
  user?: UserCreateNestedManyWithoutResourcesAndAdvicesInput;
}

export { ResourcesAndAdviceCreateInput as ResourcesAndAdviceCreateInput };
