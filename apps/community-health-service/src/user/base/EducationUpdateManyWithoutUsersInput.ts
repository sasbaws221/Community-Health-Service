
import { InputType, Field } from "@nestjs/graphql";
import { EducationWhereUniqueInput } from "../../education/base/EducationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EducationUpdateManyWithoutUsersInput {
  @Field(() => [EducationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EducationWhereUniqueInput],
  })
  connect?: Array<EducationWhereUniqueInput>;

  @Field(() => [EducationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EducationWhereUniqueInput],
  })
  disconnect?: Array<EducationWhereUniqueInput>;

  @Field(() => [EducationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EducationWhereUniqueInput],
  })
  set?: Array<EducationWhereUniqueInput>;
}

export { EducationUpdateManyWithoutUsersInput as EducationUpdateManyWithoutUsersInput };
