
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WellnessGoalWhereInput } from "./WellnessGoalWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class WellnessGoalCountArgs {
  @ApiProperty({
    required: false,
    type: () => WellnessGoalWhereInput,
  })
  @Field(() => WellnessGoalWhereInput, { nullable: true })
  @Type(() => WellnessGoalWhereInput)
  where?: WellnessGoalWhereInput;
}

export { WellnessGoalCountArgs as WellnessGoalCountArgs };
