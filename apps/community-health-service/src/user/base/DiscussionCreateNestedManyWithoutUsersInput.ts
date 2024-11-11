
import { InputType, Field } from "@nestjs/graphql";
import { DiscussionWhereUniqueInput } from "../../discussion/base/DiscussionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DiscussionCreateNestedManyWithoutUsersInput {
  @Field(() => [DiscussionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DiscussionWhereUniqueInput],
  })
  connect?: Array<DiscussionWhereUniqueInput>;
}

export { DiscussionCreateNestedManyWithoutUsersInput as DiscussionCreateNestedManyWithoutUsersInput };
