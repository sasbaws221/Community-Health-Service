/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
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
