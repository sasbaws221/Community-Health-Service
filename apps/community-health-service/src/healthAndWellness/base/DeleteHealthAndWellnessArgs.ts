
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthAndWellnessWhereUniqueInput } from "./HealthAndWellnessWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteHealthAndWellnessArgs {
  @ApiProperty({
    required: true,
    type: () => HealthAndWellnessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HealthAndWellnessWhereUniqueInput)
  @Field(() => HealthAndWellnessWhereUniqueInput, { nullable: false })
  where!: HealthAndWellnessWhereUniqueInput;
}

export { DeleteHealthAndWellnessArgs as DeleteHealthAndWellnessArgs };
