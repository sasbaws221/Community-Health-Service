
import { InputType, Field } from "@nestjs/graphql";
import { MedicalPractitionerWhereUniqueInput } from "../../medicalPractitioner/base/MedicalPractitionerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MedicalPractitionerUpdateManyWithoutUsersInput {
  @Field(() => [MedicalPractitionerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicalPractitionerWhereUniqueInput],
  })
  connect?: Array<MedicalPractitionerWhereUniqueInput>;

  @Field(() => [MedicalPractitionerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicalPractitionerWhereUniqueInput],
  })
  disconnect?: Array<MedicalPractitionerWhereUniqueInput>;

  @Field(() => [MedicalPractitionerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicalPractitionerWhereUniqueInput],
  })
  set?: Array<MedicalPractitionerWhereUniqueInput>;
}

export { MedicalPractitionerUpdateManyWithoutUsersInput as MedicalPractitionerUpdateManyWithoutUsersInput };
