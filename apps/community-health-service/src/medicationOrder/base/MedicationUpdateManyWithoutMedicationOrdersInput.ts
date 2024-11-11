
import { InputType, Field } from "@nestjs/graphql";
import { MedicationWhereUniqueInput } from "../../medication/base/MedicationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MedicationUpdateManyWithoutMedicationOrdersInput {
  @Field(() => [MedicationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicationWhereUniqueInput],
  })
  connect?: Array<MedicationWhereUniqueInput>;

  @Field(() => [MedicationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicationWhereUniqueInput],
  })
  disconnect?: Array<MedicationWhereUniqueInput>;

  @Field(() => [MedicationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicationWhereUniqueInput],
  })
  set?: Array<MedicationWhereUniqueInput>;
}

export { MedicationUpdateManyWithoutMedicationOrdersInput as MedicationUpdateManyWithoutMedicationOrdersInput };
