
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourcesAndAdviceWhereInput } from "./ResourcesAndAdviceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ResourcesAndAdviceCountArgs {
  @ApiProperty({
    required: false,
    type: () => ResourcesAndAdviceWhereInput,
  })
  @Field(() => ResourcesAndAdviceWhereInput, { nullable: true })
  @Type(() => ResourcesAndAdviceWhereInput)
  where?: ResourcesAndAdviceWhereInput;
}

export { ResourcesAndAdviceCountArgs as ResourcesAndAdviceCountArgs };
