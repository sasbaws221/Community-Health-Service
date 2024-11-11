
import { InputType, Field } from "@nestjs/graphql";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserUpdateManyWithoutResourcesAndAdvicesInput {
  @Field(() => [UserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserWhereUniqueInput],
  })
  connect?: Array<UserWhereUniqueInput>;

  @Field(() => [UserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserWhereUniqueInput],
  })
  disconnect?: Array<UserWhereUniqueInput>;

  @Field(() => [UserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserWhereUniqueInput],
  })
  set?: Array<UserWhereUniqueInput>;
}

export { UserUpdateManyWithoutResourcesAndAdvicesInput as UserUpdateManyWithoutResourcesAndAdvicesInput };
