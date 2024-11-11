
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationOrderWhereUniqueInput } from "./MedicationOrderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteMedicationOrderArgs {
  @ApiProperty({
    required: true,
    type: () => MedicationOrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicationOrderWhereUniqueInput)
  @Field(() => MedicationOrderWhereUniqueInput, { nullable: false })
  where!: MedicationOrderWhereUniqueInput;
}

export { DeleteMedicationOrderArgs as DeleteMedicationOrderArgs };
