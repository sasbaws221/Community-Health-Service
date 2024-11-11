
import { InputType, Field } from "@nestjs/graphql";
import { MedicationOrderWhereUniqueInput } from "../../medicationOrder/base/MedicationOrderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MedicationOrderUpdateManyWithoutUsersInput {
  @Field(() => [MedicationOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicationOrderWhereUniqueInput],
  })
  connect?: Array<MedicationOrderWhereUniqueInput>;

  @Field(() => [MedicationOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicationOrderWhereUniqueInput],
  })
  disconnect?: Array<MedicationOrderWhereUniqueInput>;

  @Field(() => [MedicationOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MedicationOrderWhereUniqueInput],
  })
  set?: Array<MedicationOrderWhereUniqueInput>;
}

export { MedicationOrderUpdateManyWithoutUsersInput as MedicationOrderUpdateManyWithoutUsersInput };
