
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "../../comment/base/Comment";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumDiscussionStatus } from "./EnumDiscussionStatus";
import { EnumDiscussionTopic } from "./EnumDiscussionTopic";
import { User } from "../../user/base/User";

@ObjectType()
class Discussion {
  @ApiProperty({
    required: false,
    type: () => [Comment],
  })
  @ValidateNested()
  @Type(() => Comment)
  @IsOptional()
  comment?: Array<Comment>;

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
  content!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  title!: string | null;

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
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Discussion as Discussion };
