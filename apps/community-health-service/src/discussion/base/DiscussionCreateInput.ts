
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentCreateNestedManyWithoutDiscussionsInput } from "./CommentCreateNestedManyWithoutDiscussionsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumDiscussionStatus } from "./EnumDiscussionStatus";
import { EnumDiscussionTopic } from "./EnumDiscussionTopic";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class DiscussionCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutDiscussionsInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutDiscussionsInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutDiscussionsInput, {
    nullable: true,
  })
  comment?: CommentCreateNestedManyWithoutDiscussionsInput;

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
    enum: EnumDiscussionStatus,
  })
  @IsEnum(EnumDiscussionStatus)
  @IsOptional()
  @Field(() => EnumDiscussionStatus, {
    nullable: true,
  })
  status?: "Open" | "Closed" | null;

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
    enum: EnumDiscussionTopic,
  })
  @IsEnum(EnumDiscussionTopic)
  @IsOptional()
  @Field(() => EnumDiscussionTopic, {
    nullable: true,
  })
  topic?: "Health" | "Events" | "ResourcesAndAdvice" | "Tips" | null;

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

export { DiscussionCreateInput as DiscussionCreateInput };
