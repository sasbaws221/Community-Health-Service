
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscussionCreateInput } from "./DiscussionCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateDiscussionArgs {
  @ApiProperty({
    required: true,
    type: () => DiscussionCreateInput,
  })
  @ValidateNested()
  @Type(() => DiscussionCreateInput)
  @Field(() => DiscussionCreateInput, { nullable: false })
  data!: DiscussionCreateInput;
}

export { CreateDiscussionArgs as CreateDiscussionArgs };
