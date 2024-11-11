
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourcesAndAdviceWhereUniqueInput } from "./ResourcesAndAdviceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ResourcesAndAdviceUpdateInput } from "./ResourcesAndAdviceUpdateInput";

@ArgsType()
class UpdateResourcesAndAdviceArgs {
  @ApiProperty({
    required: true,
    type: () => ResourcesAndAdviceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdviceWhereUniqueInput)
  @Field(() => ResourcesAndAdviceWhereUniqueInput, { nullable: false })
  where!: ResourcesAndAdviceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ResourcesAndAdviceUpdateInput,
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdviceUpdateInput)
  @Field(() => ResourcesAndAdviceUpdateInput, { nullable: false })
  data!: ResourcesAndAdviceUpdateInput;
}

export { UpdateResourcesAndAdviceArgs as UpdateResourcesAndAdviceArgs };
