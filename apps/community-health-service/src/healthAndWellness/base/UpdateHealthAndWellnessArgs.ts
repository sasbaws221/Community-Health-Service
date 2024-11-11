
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthAndWellnessWhereUniqueInput } from "./HealthAndWellnessWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HealthAndWellnessUpdateInput } from "./HealthAndWellnessUpdateInput";

@ArgsType()
class UpdateHealthAndWellnessArgs {
  @ApiProperty({
    required: true,
    type: () => HealthAndWellnessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HealthAndWellnessWhereUniqueInput)
  @Field(() => HealthAndWellnessWhereUniqueInput, { nullable: false })
  where!: HealthAndWellnessWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HealthAndWellnessUpdateInput,
  })
  @ValidateNested()
  @Type(() => HealthAndWellnessUpdateInput)
  @Field(() => HealthAndWellnessUpdateInput, { nullable: false })
  data!: HealthAndWellnessUpdateInput;
}

export { UpdateHealthAndWellnessArgs as UpdateHealthAndWellnessArgs };
