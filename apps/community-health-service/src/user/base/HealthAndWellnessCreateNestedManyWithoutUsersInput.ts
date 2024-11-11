
import { InputType, Field } from "@nestjs/graphql";
import { HealthAndWellnessWhereUniqueInput } from "../../healthAndWellness/base/HealthAndWellnessWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class HealthAndWellnessCreateNestedManyWithoutUsersInput {
  @Field(() => [HealthAndWellnessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HealthAndWellnessWhereUniqueInput],
  })
  connect?: Array<HealthAndWellnessWhereUniqueInput>;
}

export { HealthAndWellnessCreateNestedManyWithoutUsersInput as HealthAndWellnessCreateNestedManyWithoutUsersInput };
