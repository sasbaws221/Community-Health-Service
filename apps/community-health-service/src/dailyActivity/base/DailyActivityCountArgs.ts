
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DailyActivityWhereInput } from "./DailyActivityWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class DailyActivityCountArgs {
  @ApiProperty({
    required: false,
    type: () => DailyActivityWhereInput,
  })
  @Field(() => DailyActivityWhereInput, { nullable: true })
  @Type(() => DailyActivityWhereInput)
  where?: DailyActivityWhereInput;
}

export { DailyActivityCountArgs as DailyActivityCountArgs };
