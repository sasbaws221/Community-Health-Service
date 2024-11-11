
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
import { CommentCreateNestedManyWithoutHealthAndWellnessesInput } from "./CommentCreateNestedManyWithoutHealthAndWellnessesInput";
import { UserCreateNestedManyWithoutHealthAndWellnessesInput } from "./UserCreateNestedManyWithoutHealthAndWellnessesInput";

@InputType()
class HealthAndWellnessCreateInput {
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
    type: () => CommentCreateNestedManyWithoutHealthAndWellnessesInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutHealthAndWellnessesInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutHealthAndWellnessesInput, {
    nullable: true,
  })
  comment?: CommentCreateNestedManyWithoutHealthAndWellnessesInput;

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
    type: () => UserCreateNestedManyWithoutHealthAndWellnessesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutHealthAndWellnessesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutHealthAndWellnessesInput, {
    nullable: true,
  })
  user?: UserCreateNestedManyWithoutHealthAndWellnessesInput;
}

export { HealthAndWellnessCreateInput as HealthAndWellnessCreateInput };
