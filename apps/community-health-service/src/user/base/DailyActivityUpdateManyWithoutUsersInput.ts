
import { InputType, Field } from "@nestjs/graphql";
import { DailyActivityWhereUniqueInput } from "../../dailyActivity/base/DailyActivityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DailyActivityUpdateManyWithoutUsersInput {
  @Field(() => [DailyActivityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DailyActivityWhereUniqueInput],
  })
  connect?: Array<DailyActivityWhereUniqueInput>;

  @Field(() => [DailyActivityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DailyActivityWhereUniqueInput],
  })
  disconnect?: Array<DailyActivityWhereUniqueInput>;

  @Field(() => [DailyActivityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DailyActivityWhereUniqueInput],
  })
  set?: Array<DailyActivityWhereUniqueInput>;
}

export { DailyActivityUpdateManyWithoutUsersInput as DailyActivityUpdateManyWithoutUsersInput };
