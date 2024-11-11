
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinanceWhereInput } from "./FinanceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FinanceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FinanceWhereInput,
  })
  @ValidateNested()
  @Type(() => FinanceWhereInput)
  @IsOptional()
  @Field(() => FinanceWhereInput, {
    nullable: true,
  })
  every?: FinanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinanceWhereInput,
  })
  @ValidateNested()
  @Type(() => FinanceWhereInput)
  @IsOptional()
  @Field(() => FinanceWhereInput, {
    nullable: true,
  })
  some?: FinanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => FinanceWhereInput,
  })
  @ValidateNested()
  @Type(() => FinanceWhereInput)
  @IsOptional()
  @Field(() => FinanceWhereInput, {
    nullable: true,
  })
  none?: FinanceWhereInput;
}
export { FinanceListRelationFilter as FinanceListRelationFilter };
