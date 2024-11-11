
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EducationWhereInput } from "./EducationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EducationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EducationWhereInput,
  })
  @ValidateNested()
  @Type(() => EducationWhereInput)
  @IsOptional()
  @Field(() => EducationWhereInput, {
    nullable: true,
  })
  every?: EducationWhereInput;

  @ApiProperty({
    required: false,
    type: () => EducationWhereInput,
  })
  @ValidateNested()
  @Type(() => EducationWhereInput)
  @IsOptional()
  @Field(() => EducationWhereInput, {
    nullable: true,
  })
  some?: EducationWhereInput;

  @ApiProperty({
    required: false,
    type: () => EducationWhereInput,
  })
  @ValidateNested()
  @Type(() => EducationWhereInput)
  @IsOptional()
  @Field(() => EducationWhereInput, {
    nullable: true,
  })
  none?: EducationWhereInput;
}
export { EducationListRelationFilter as EducationListRelationFilter };
