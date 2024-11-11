
import { InputType, Field } from "@nestjs/graphql";
import { MedicationWhereUniqueInput } from "../../medication/base/MedicationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MedicationCreateNestedManyWithoutMedicationOrdersInput {
  @Field(() => [MedicationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicationWhereUniqueInput],
  })
  connect?: Array<MedicationWhereUniqueInput>;
}

export { MedicationCreateNestedManyWithoutMedicationOrdersInput as MedicationCreateNestedManyWithoutMedicationOrdersInput };
