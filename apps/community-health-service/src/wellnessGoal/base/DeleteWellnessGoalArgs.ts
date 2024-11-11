
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WellnessGoalWhereUniqueInput } from "./WellnessGoalWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteWellnessGoalArgs {
  @ApiProperty({
    required: true,
    type: () => WellnessGoalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WellnessGoalWhereUniqueInput)
  @Field(() => WellnessGoalWhereUniqueInput, { nullable: false })
  where!: WellnessGoalWhereUniqueInput;
}

export { DeleteWellnessGoalArgs as DeleteWellnessGoalArgs };
