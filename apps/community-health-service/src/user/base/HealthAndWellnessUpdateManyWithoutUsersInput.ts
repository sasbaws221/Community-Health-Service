
import { InputType, Field } from "@nestjs/graphql";
import { HealthAndWellnessWhereUniqueInput } from "../../healthAndWellness/base/HealthAndWellnessWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class HealthAndWellnessUpdateManyWithoutUsersInput {
  @Field(() => [HealthAndWellnessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HealthAndWellnessWhereUniqueInput],
  })
  connect?: Array<HealthAndWellnessWhereUniqueInput>;

  @Field(() => [HealthAndWellnessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HealthAndWellnessWhereUniqueInput],
  })
  disconnect?: Array<HealthAndWellnessWhereUniqueInput>;

  @Field(() => [HealthAndWellnessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HealthAndWellnessWhereUniqueInput],
  })
  set?: Array<HealthAndWellnessWhereUniqueInput>;
}

export { HealthAndWellnessUpdateManyWithoutUsersInput as HealthAndWellnessUpdateManyWithoutUsersInput };
