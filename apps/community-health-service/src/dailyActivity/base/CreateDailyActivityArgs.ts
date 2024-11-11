
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DailyActivityCreateInput } from "./DailyActivityCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateDailyActivityArgs {
  @ApiProperty({
    required: true,
    type: () => DailyActivityCreateInput,
  })
  @ValidateNested()
  @Type(() => DailyActivityCreateInput)
  @Field(() => DailyActivityCreateInput, { nullable: false })
  data!: DailyActivityCreateInput;
}

export { CreateDailyActivityArgs as CreateDailyActivityArgs };
