
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourcesAndAdviceCreateInput } from "./ResourcesAndAdviceCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateResourcesAndAdviceArgs {
  @ApiProperty({
    required: true,
    type: () => ResourcesAndAdviceCreateInput,
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdviceCreateInput)
  @Field(() => ResourcesAndAdviceCreateInput, { nullable: false })
  data!: ResourcesAndAdviceCreateInput;
}

export { CreateResourcesAndAdviceArgs as CreateResourcesAndAdviceArgs };
