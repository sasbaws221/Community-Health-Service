
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinanceWhereInput } from "./FinanceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FinanceOrderByInput } from "./FinanceOrderByInput";

@ArgsType()
class FinanceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FinanceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FinanceWhereInput, { nullable: true })
  @Type(() => FinanceWhereInput)
  where?: FinanceWhereInput;

  @ApiProperty({
    required: false,
    type: [FinanceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FinanceOrderByInput], { nullable: true })
  @Type(() => FinanceOrderByInput)
  orderBy?: Array<FinanceOrderByInput>;

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

export { FinanceFindManyArgs as FinanceFindManyArgs };
