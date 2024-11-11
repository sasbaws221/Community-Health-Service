
import { InputType, Field } from "@nestjs/graphql";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserCreateNestedManyWithoutEducationsInput {
  @Field(() => [UserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserWhereUniqueInput],
  })
  connect?: Array<UserWhereUniqueInput>;
}

export { UserCreateNestedManyWithoutEducationsInput as UserCreateNestedManyWithoutEducationsInput };
