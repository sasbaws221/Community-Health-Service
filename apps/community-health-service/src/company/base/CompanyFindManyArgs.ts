
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanyWhereInput } from "./CompanyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CompanyOrderByInput } from "./CompanyOrderByInput";

@ArgsType()
class CompanyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CompanyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CompanyWhereInput, { nullable: true })
  @Type(() => CompanyWhereInput)
  where?: CompanyWhereInput;

  @ApiProperty({
    required: false,
    type: [CompanyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CompanyOrderByInput], { nullable: true })
  @Type(() => CompanyOrderByInput)
  orderBy?: Array<CompanyOrderByInput>;

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

export { CompanyFindManyArgs as CompanyFindManyArgs };
