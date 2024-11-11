
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourcesAndAdviceWhereUniqueInput } from "./ResourcesAndAdviceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteResourcesAndAdviceArgs {
  @ApiProperty({
    required: true,
    type: () => ResourcesAndAdviceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdviceWhereUniqueInput)
  @Field(() => ResourcesAndAdviceWhereUniqueInput, { nullable: false })
  where!: ResourcesAndAdviceWhereUniqueInput;
}

export { DeleteResourcesAndAdviceArgs as DeleteResourcesAndAdviceArgs };
