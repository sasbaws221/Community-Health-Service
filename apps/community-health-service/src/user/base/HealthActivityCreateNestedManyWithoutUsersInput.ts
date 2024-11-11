
import { InputType, Field } from "@nestjs/graphql";
import { HealthActivityWhereUniqueInput } from "../../healthActivity/base/HealthActivityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class HealthActivityCreateNestedManyWithoutUsersInput {
  @Field(() => [HealthActivityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HealthActivityWhereUniqueInput],
  })
  connect?: Array<HealthActivityWhereUniqueInput>;
}

export { HealthActivityCreateNestedManyWithoutUsersInput as HealthActivityCreateNestedManyWithoutUsersInput };
