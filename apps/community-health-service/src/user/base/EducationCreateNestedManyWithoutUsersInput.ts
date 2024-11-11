
import { InputType, Field } from "@nestjs/graphql";
import { EducationWhereUniqueInput } from "../../education/base/EducationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EducationCreateNestedManyWithoutUsersInput {
  @Field(() => [EducationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EducationWhereUniqueInput],
  })
  connect?: Array<EducationWhereUniqueInput>;
}

export { EducationCreateNestedManyWithoutUsersInput as EducationCreateNestedManyWithoutUsersInput };
