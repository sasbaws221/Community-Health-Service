
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WellnessGoalCreateInput } from "./WellnessGoalCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateWellnessGoalArgs {
  @ApiProperty({
    required: true,
    type: () => WellnessGoalCreateInput,
  })
  @ValidateNested()
  @Type(() => WellnessGoalCreateInput)
  @Field(() => WellnessGoalCreateInput, { nullable: false })
  data!: WellnessGoalCreateInput;
}

export { CreateWellnessGoalArgs as CreateWellnessGoalArgs };
