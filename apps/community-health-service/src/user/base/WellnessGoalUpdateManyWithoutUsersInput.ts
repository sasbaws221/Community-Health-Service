
import { InputType, Field } from "@nestjs/graphql";
import { WellnessGoalWhereUniqueInput } from "../../wellnessGoal/base/WellnessGoalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WellnessGoalUpdateManyWithoutUsersInput {
  @Field(() => [WellnessGoalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WellnessGoalWhereUniqueInput],
  })
  connect?: Array<WellnessGoalWhereUniqueInput>;

  @Field(() => [WellnessGoalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WellnessGoalWhereUniqueInput],
  })
  disconnect?: Array<WellnessGoalWhereUniqueInput>;

  @Field(() => [WellnessGoalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WellnessGoalWhereUniqueInput],
  })
  set?: Array<WellnessGoalWhereUniqueInput>;
}

export { WellnessGoalUpdateManyWithoutUsersInput as WellnessGoalUpdateManyWithoutUsersInput };
