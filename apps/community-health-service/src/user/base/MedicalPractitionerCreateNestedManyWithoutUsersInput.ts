
import { InputType, Field } from "@nestjs/graphql";
import { MedicalPractitionerWhereUniqueInput } from "../../medicalPractitioner/base/MedicalPractitionerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MedicalPractitionerCreateNestedManyWithoutUsersInput {
  @Field(() => [MedicalPractitionerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicalPractitionerWhereUniqueInput],
  })
  connect?: Array<MedicalPractitionerWhereUniqueInput>;
}

export { MedicalPractitionerCreateNestedManyWithoutUsersInput as MedicalPractitionerCreateNestedManyWithoutUsersInput };
