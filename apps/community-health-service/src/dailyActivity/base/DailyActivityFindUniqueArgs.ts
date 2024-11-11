
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DailyActivityWhereUniqueInput } from "./DailyActivityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DailyActivityFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => DailyActivityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DailyActivityWhereUniqueInput)
  @Field(() => DailyActivityWhereUniqueInput, { nullable: false })
  where!: DailyActivityWhereUniqueInput;
}

export { DailyActivityFindUniqueArgs as DailyActivityFindUniqueArgs };
