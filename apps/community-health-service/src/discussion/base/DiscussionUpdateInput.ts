
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentUpdateManyWithoutDiscussionsInput } from "./CommentUpdateManyWithoutDiscussionsInput";
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
class DiscussionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutDiscussionsInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutDiscussionsInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutDiscussionsInput, {
    nullable: true,
  })
  comment?: CommentUpdateManyWithoutDiscussionsInput;

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

export { DiscussionUpdateInput as DiscussionUpdateInput };
