
import { InputType, Field } from "@nestjs/graphql";
import { MedicationOrderWhereUniqueInput } from "../../medicationOrder/base/MedicationOrderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MedicationOrderCreateNestedManyWithoutUsersInput {
  @Field(() => [MedicationOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicationOrderWhereUniqueInput],
  })
  connect?: Array<MedicationOrderWhereUniqueInput>;
}

export { MedicationOrderCreateNestedManyWithoutUsersInput as MedicationOrderCreateNestedManyWithoutUsersInput };
