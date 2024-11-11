
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { CommentUpdateManyWithoutHealthAndWellnessesInput } from "./CommentUpdateManyWithoutHealthAndWellnessesInput";
import { UserUpdateManyWithoutHealthAndWellnessesInput } from "./UserUpdateManyWithoutHealthAndWellnessesInput";

@InputType()
class HealthAndWellnessUpdateInput {
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
    type: () => CommentUpdateManyWithoutHealthAndWellnessesInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutHealthAndWellnessesInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutHealthAndWellnessesInput, {
    nullable: true,
  })
  comment?: CommentUpdateManyWithoutHealthAndWellnessesInput;

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
  tags?: string | null;

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
    type: () => UserUpdateManyWithoutHealthAndWellnessesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutHealthAndWellnessesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutHealthAndWellnessesInput, {
    nullable: true,
  })
  user?: UserUpdateManyWithoutHealthAndWellnessesInput;
}

export { HealthAndWellnessUpdateInput as HealthAndWellnessUpdateInput };
