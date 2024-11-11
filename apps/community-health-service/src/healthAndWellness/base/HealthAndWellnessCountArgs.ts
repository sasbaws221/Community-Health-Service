
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthAndWellnessWhereInput } from "./HealthAndWellnessWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class HealthAndWellnessCountArgs {
  @ApiProperty({
    required: false,
    type: () => HealthAndWellnessWhereInput,
  })
  @Field(() => HealthAndWellnessWhereInput, { nullable: true })
  @Type(() => HealthAndWellnessWhereInput)
  where?: HealthAndWellnessWhereInput;
}

export { HealthAndWellnessCountArgs as HealthAndWellnessCountArgs };
