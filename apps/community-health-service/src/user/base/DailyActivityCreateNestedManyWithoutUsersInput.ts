
import { InputType, Field } from "@nestjs/graphql";
import { DailyActivityWhereUniqueInput } from "../../dailyActivity/base/DailyActivityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DailyActivityCreateNestedManyWithoutUsersInput {
  @Field(() => [DailyActivityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DailyActivityWhereUniqueInput],
  })
  connect?: Array<DailyActivityWhereUniqueInput>;
}

export { DailyActivityCreateNestedManyWithoutUsersInput as DailyActivityCreateNestedManyWithoutUsersInput };
