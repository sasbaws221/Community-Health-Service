
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationOrderCreateInput } from "./MedicationOrderCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateMedicationOrderArgs {
  @ApiProperty({
    required: true,
    type: () => MedicationOrderCreateInput,
  })
  @ValidateNested()
  @Type(() => MedicationOrderCreateInput)
  @Field(() => MedicationOrderCreateInput, { nullable: false })
  data!: MedicationOrderCreateInput;
}

export { CreateMedicationOrderArgs as CreateMedicationOrderArgs };
