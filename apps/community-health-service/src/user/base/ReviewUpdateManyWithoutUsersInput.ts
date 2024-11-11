
import { InputType, Field } from "@nestjs/graphql";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReviewUpdateManyWithoutUsersInput {
  @Field(() => [ReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReviewWhereUniqueInput],
  })
  connect?: Array<ReviewWhereUniqueInput>;

  @Field(() => [ReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReviewWhereUniqueInput],
  })
  disconnect?: Array<ReviewWhereUniqueInput>;

  @Field(() => [ReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReviewWhereUniqueInput],
  })
  set?: Array<ReviewWhereUniqueInput>;
}

export { ReviewUpdateManyWithoutUsersInput as ReviewUpdateManyWithoutUsersInput };
