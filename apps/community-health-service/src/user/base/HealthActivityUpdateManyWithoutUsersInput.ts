
import { InputType, Field } from "@nestjs/graphql";
import { HealthActivityWhereUniqueInput } from "../../healthActivity/base/HealthActivityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class HealthActivityUpdateManyWithoutUsersInput {
  @Field(() => [HealthActivityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HealthActivityWhereUniqueInput],
  })
  connect?: Array<HealthActivityWhereUniqueInput>;

  @Field(() => [HealthActivityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HealthActivityWhereUniqueInput],
  })
  disconnect?: Array<HealthActivityWhereUniqueInput>;

  @Field(() => [HealthActivityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HealthActivityWhereUniqueInput],
  })
  set?: Array<HealthActivityWhereUniqueInput>;
}

export { HealthActivityUpdateManyWithoutUsersInput as HealthActivityUpdateManyWithoutUsersInput };
