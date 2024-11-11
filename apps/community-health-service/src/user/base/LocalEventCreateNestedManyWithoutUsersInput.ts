
import { InputType, Field } from "@nestjs/graphql";
import { LocalEventWhereUniqueInput } from "../../localEvent/base/LocalEventWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LocalEventCreateNestedManyWithoutUsersInput {
  @Field(() => [LocalEventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocalEventWhereUniqueInput],
  })
  connect?: Array<LocalEventWhereUniqueInput>;
}

export { LocalEventCreateNestedManyWithoutUsersInput as LocalEventCreateNestedManyWithoutUsersInput };
