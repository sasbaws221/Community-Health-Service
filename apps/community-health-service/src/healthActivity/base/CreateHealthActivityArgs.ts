
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthActivityCreateInput } from "./HealthActivityCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateHealthActivityArgs {
  @ApiProperty({
    required: true,
    type: () => HealthActivityCreateInput,
  })
  @ValidateNested()
  @Type(() => HealthActivityCreateInput)
  @Field(() => HealthActivityCreateInput, { nullable: false })
  data!: HealthActivityCreateInput;
}

export { CreateHealthActivityArgs as CreateHealthActivityArgs };
