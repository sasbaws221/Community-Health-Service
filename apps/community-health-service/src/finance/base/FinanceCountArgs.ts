
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinanceWhereInput } from "./FinanceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class FinanceCountArgs {
  @ApiProperty({
    required: false,
    type: () => FinanceWhereInput,
  })
  @Field(() => FinanceWhereInput, { nullable: true })
  @Type(() => FinanceWhereInput)
  where?: FinanceWhereInput;
}

export { FinanceCountArgs as FinanceCountArgs };
