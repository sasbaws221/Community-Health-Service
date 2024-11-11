
import { InputType, Field } from "@nestjs/graphql";
import { LocalEventWhereUniqueInput } from "../../localEvent/base/LocalEventWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LocalEventUpdateManyWithoutUsersInput {
  @Field(() => [LocalEventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocalEventWhereUniqueInput],
  })
  connect?: Array<LocalEventWhereUniqueInput>;

  @Field(() => [LocalEventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocalEventWhereUniqueInput],
  })
  disconnect?: Array<LocalEventWhereUniqueInput>;

  @Field(() => [LocalEventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocalEventWhereUniqueInput],
  })
  set?: Array<LocalEventWhereUniqueInput>;
}

export { LocalEventUpdateManyWithoutUsersInput as LocalEventUpdateManyWithoutUsersInput };
