
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinanceCreateInput } from "./FinanceCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateFinanceArgs {
  @ApiProperty({
    required: true,
    type: () => FinanceCreateInput,
  })
  @ValidateNested()
  @Type(() => FinanceCreateInput)
  @Field(() => FinanceCreateInput, { nullable: false })
  data!: FinanceCreateInput;
}

export { CreateFinanceArgs as CreateFinanceArgs };
