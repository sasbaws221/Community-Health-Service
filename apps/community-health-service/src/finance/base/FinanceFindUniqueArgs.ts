
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinanceWhereUniqueInput } from "./FinanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class FinanceFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => FinanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FinanceWhereUniqueInput)
  @Field(() => FinanceWhereUniqueInput, { nullable: false })
  where!: FinanceWhereUniqueInput;
}

export { FinanceFindUniqueArgs as FinanceFindUniqueArgs };
