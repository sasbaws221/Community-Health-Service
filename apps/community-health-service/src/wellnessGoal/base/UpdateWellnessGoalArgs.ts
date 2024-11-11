
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WellnessGoalWhereUniqueInput } from "./WellnessGoalWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WellnessGoalUpdateInput } from "./WellnessGoalUpdateInput";

@ArgsType()
class UpdateWellnessGoalArgs {
  @ApiProperty({
    required: true,
    type: () => WellnessGoalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WellnessGoalWhereUniqueInput)
  @Field(() => WellnessGoalWhereUniqueInput, { nullable: false })
  where!: WellnessGoalWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WellnessGoalUpdateInput,
  })
  @ValidateNested()
  @Type(() => WellnessGoalUpdateInput)
  @Field(() => WellnessGoalUpdateInput, { nullable: false })
  data!: WellnessGoalUpdateInput;
}

export { UpdateWellnessGoalArgs as UpdateWellnessGoalArgs };
