
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DailyActivityWhereUniqueInput } from "./DailyActivityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DailyActivityUpdateInput } from "./DailyActivityUpdateInput";

@ArgsType()
class UpdateDailyActivityArgs {
  @ApiProperty({
    required: true,
    type: () => DailyActivityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DailyActivityWhereUniqueInput)
  @Field(() => DailyActivityWhereUniqueInput, { nullable: false })
  where!: DailyActivityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DailyActivityUpdateInput,
  })
  @ValidateNested()
  @Type(() => DailyActivityUpdateInput)
  @Field(() => DailyActivityUpdateInput, { nullable: false })
  data!: DailyActivityUpdateInput;
}

export { UpdateDailyActivityArgs as UpdateDailyActivityArgs };
