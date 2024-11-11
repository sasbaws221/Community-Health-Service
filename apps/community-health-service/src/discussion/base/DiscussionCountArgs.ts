
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscussionWhereInput } from "./DiscussionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class DiscussionCountArgs {
  @ApiProperty({
    required: false,
    type: () => DiscussionWhereInput,
  })
  @Field(() => DiscussionWhereInput, { nullable: true })
  @Type(() => DiscussionWhereInput)
  where?: DiscussionWhereInput;
}

export { DiscussionCountArgs as DiscussionCountArgs };
