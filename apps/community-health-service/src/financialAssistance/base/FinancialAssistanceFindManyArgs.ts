
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialAssistanceWhereInput } from "./FinancialAssistanceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FinancialAssistanceOrderByInput } from "./FinancialAssistanceOrderByInput";

@ArgsType()
class FinancialAssistanceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FinancialAssistanceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FinancialAssistanceWhereInput, { nullable: true })
  @Type(() => FinancialAssistanceWhereInput)
  where?: FinancialAssistanceWhereInput;

  @ApiProperty({
    required: false,
    type: [FinancialAssistanceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FinancialAssistanceOrderByInput], { nullable: true })
  @Type(() => FinancialAssistanceOrderByInput)
  orderBy?: Array<FinancialAssistanceOrderByInput>;

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

export { FinancialAssistanceFindManyArgs as FinancialAssistanceFindManyArgs };
