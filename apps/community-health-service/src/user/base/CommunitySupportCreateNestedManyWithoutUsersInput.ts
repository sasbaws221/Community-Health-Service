
import { InputType, Field } from "@nestjs/graphql";
import { CommunitySupportWhereUniqueInput } from "../../communitySupport/base/CommunitySupportWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CommunitySupportCreateNestedManyWithoutUsersInput {
  @Field(() => [CommunitySupportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommunitySupportWhereUniqueInput],
  })
  connect?: Array<CommunitySupportWhereUniqueInput>;
}

export { CommunitySupportCreateNestedManyWithoutUsersInput as CommunitySupportCreateNestedManyWithoutUsersInput };
