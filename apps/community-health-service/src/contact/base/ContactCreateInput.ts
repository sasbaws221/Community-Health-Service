
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { EnumContactStatus } from "./EnumContactStatus";

@InputType()
class ContactCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  contact?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

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
  message?: string | null;

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
  name?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumContactStatus,
  })
  @IsEnum(EnumContactStatus)
  @IsOptional()
  @Field(() => EnumContactStatus, {
    nullable: true,
  })
  status?: "New" | "Read" | "Responded" | null;

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
  subject?: string | null;
}

export { ContactCreateInput as ContactCreateInput };
