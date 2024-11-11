
import { InputType, Field } from "@nestjs/graphql";
import { CommunitySupportWhereUniqueInput } from "../../communitySupport/base/CommunitySupportWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CommunitySupportUpdateManyWithoutUsersInput {
  @Field(() => [CommunitySupportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommunitySupportWhereUniqueInput],
  })
  connect?: Array<CommunitySupportWhereUniqueInput>;

  @Field(() => [CommunitySupportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommunitySupportWhereUniqueInput],
  })
  disconnect?: Array<CommunitySupportWhereUniqueInput>;

  @Field(() => [CommunitySupportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommunitySupportWhereUniqueInput],
  })
  set?: Array<CommunitySupportWhereUniqueInput>;
}

export { CommunitySupportUpdateManyWithoutUsersInput as CommunitySupportUpdateManyWithoutUsersInput };
