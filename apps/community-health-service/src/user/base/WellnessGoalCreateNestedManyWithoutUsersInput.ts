
import { InputType, Field } from "@nestjs/graphql";
import { WellnessGoalWhereUniqueInput } from "../../wellnessGoal/base/WellnessGoalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WellnessGoalCreateNestedManyWithoutUsersInput {
  @Field(() => [WellnessGoalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WellnessGoalWhereUniqueInput],
  })
  connect?: Array<WellnessGoalWhereUniqueInput>;
}

export { WellnessGoalCreateNestedManyWithoutUsersInput as WellnessGoalCreateNestedManyWithoutUsersInput };
