
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationOrderWhereUniqueInput } from "./MedicationOrderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MedicationOrderUpdateInput } from "./MedicationOrderUpdateInput";

@ArgsType()
class UpdateMedicationOrderArgs {
  @ApiProperty({
    required: true,
    type: () => MedicationOrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicationOrderWhereUniqueInput)
  @Field(() => MedicationOrderWhereUniqueInput, { nullable: false })
  where!: MedicationOrderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MedicationOrderUpdateInput,
  })
  @ValidateNested()
  @Type(() => MedicationOrderUpdateInput)
  @Field(() => MedicationOrderUpdateInput, { nullable: false })
  data!: MedicationOrderUpdateInput;
}

export { UpdateMedicationOrderArgs as UpdateMedicationOrderArgs };
