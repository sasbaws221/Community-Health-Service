
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationWhereUniqueInput } from "./MedicationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteMedicationArgs {
  @ApiProperty({
    required: true,
    type: () => MedicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicationWhereUniqueInput)
  @Field(() => MedicationWhereUniqueInput, { nullable: false })
  where!: MedicationWhereUniqueInput;
}

export { DeleteMedicationArgs as DeleteMedicationArgs };
