
import { InputType, Field } from "@nestjs/graphql";
import { DiscussionWhereUniqueInput } from "../../discussion/base/DiscussionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DiscussionUpdateManyWithoutUsersInput {
  @Field(() => [DiscussionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DiscussionWhereUniqueInput],
  })
  connect?: Array<DiscussionWhereUniqueInput>;

  @Field(() => [DiscussionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DiscussionWhereUniqueInput],
  })
  disconnect?: Array<DiscussionWhereUniqueInput>;

  @Field(() => [DiscussionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DiscussionWhereUniqueInput],
  })
  set?: Array<DiscussionWhereUniqueInput>;
}

export { DiscussionUpdateManyWithoutUsersInput as DiscussionUpdateManyWithoutUsersInput };
