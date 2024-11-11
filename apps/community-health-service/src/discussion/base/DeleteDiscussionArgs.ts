
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscussionWhereUniqueInput } from "./DiscussionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteDiscussionArgs {
  @ApiProperty({
    required: true,
    type: () => DiscussionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscussionWhereUniqueInput)
  @Field(() => DiscussionWhereUniqueInput, { nullable: false })
  where!: DiscussionWhereUniqueInput;
}

export { DeleteDiscussionArgs as DeleteDiscussionArgs };
