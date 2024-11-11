
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthAndWellnessCreateInput } from "./HealthAndWellnessCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateHealthAndWellnessArgs {
  @ApiProperty({
    required: true,
    type: () => HealthAndWellnessCreateInput,
  })
  @ValidateNested()
  @Type(() => HealthAndWellnessCreateInput)
  @Field(() => HealthAndWellnessCreateInput, { nullable: false })
  data!: HealthAndWellnessCreateInput;
}

export { CreateHealthAndWellnessArgs as CreateHealthAndWellnessArgs };
