
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicalPractitionerCreateInput } from "./MedicalPractitionerCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateMedicalPractitionerArgs {
  @ApiProperty({
    required: true,
    type: () => MedicalPractitionerCreateInput,
  })
  @ValidateNested()
  @Type(() => MedicalPractitionerCreateInput)
  @Field(() => MedicalPractitionerCreateInput, { nullable: false })
  data!: MedicalPractitionerCreateInput;
}

export { CreateMedicalPractitionerArgs as CreateMedicalPractitionerArgs };
