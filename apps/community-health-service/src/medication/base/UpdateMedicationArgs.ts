
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationWhereUniqueInput } from "./MedicationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MedicationUpdateInput } from "./MedicationUpdateInput";

@ArgsType()
class UpdateMedicationArgs {
  @ApiProperty({
    required: true,
    type: () => MedicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicationWhereUniqueInput)
  @Field(() => MedicationWhereUniqueInput, { nullable: false })
  where!: MedicationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MedicationUpdateInput,
  })
  @ValidateNested()
  @Type(() => MedicationUpdateInput)
  @Field(() => MedicationUpdateInput, { nullable: false })
  data!: MedicationUpdateInput;
}

export { UpdateMedicationArgs as UpdateMedicationArgs };
