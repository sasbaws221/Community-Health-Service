
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EducationWhereInput } from "./EducationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EducationOrderByInput } from "./EducationOrderByInput";

@ArgsType()
class EducationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EducationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EducationWhereInput, { nullable: true })
  @Type(() => EducationWhereInput)
  where?: EducationWhereInput;

  @ApiProperty({
    required: false,
    type: [EducationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EducationOrderByInput], { nullable: true })
  @Type(() => EducationOrderByInput)
  orderBy?: Array<EducationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EducationFindManyArgs as EducationFindManyArgs };
