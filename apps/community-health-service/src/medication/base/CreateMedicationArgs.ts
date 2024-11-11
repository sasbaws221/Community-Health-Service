
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationCreateInput } from "./MedicationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateMedicationArgs {
  @ApiProperty({
    required: true,
    type: () => MedicationCreateInput,
  })
  @ValidateNested()
  @Type(() => MedicationCreateInput)
  @Field(() => MedicationCreateInput, { nullable: false })
  data!: MedicationCreateInput;
}

export { CreateMedicationArgs as CreateMedicationArgs };
