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
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumCommunitySupportStatus } from "./EnumCommunitySupportStatus";

@InputType()
class CommunitySupportCreateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isAdmin?: boolean | null;

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
  messageContent?: string | null;

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
  sender?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumCommunitySupportStatus,
  })
  @IsEnum(EnumCommunitySupportStatus)
  @IsOptional()
  @Field(() => EnumCommunitySupportStatus, {
    nullable: true,
  })
  status?: "Sent" | "Received" | "Read" | null;
}

export { CommunitySupportCreateInput as CommunitySupportCreateInput };
