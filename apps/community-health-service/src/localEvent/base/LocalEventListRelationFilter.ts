
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalEventWhereInput } from "./LocalEventWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LocalEventListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LocalEventWhereInput,
  })
  @ValidateNested()
  @Type(() => LocalEventWhereInput)
  @IsOptional()
  @Field(() => LocalEventWhereInput, {
    nullable: true,
  })
  every?: LocalEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => LocalEventWhereInput,
  })
  @ValidateNested()
  @Type(() => LocalEventWhereInput)
  @IsOptional()
  @Field(() => LocalEventWhereInput, {
    nullable: true,
  })
  some?: LocalEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => LocalEventWhereInput,
  })
  @ValidateNested()
  @Type(() => LocalEventWhereInput)
  @IsOptional()
  @Field(() => LocalEventWhereInput, {
    nullable: true,
  })
  none?: LocalEventWhereInput;
}
export { LocalEventListRelationFilter as LocalEventListRelationFilter };
