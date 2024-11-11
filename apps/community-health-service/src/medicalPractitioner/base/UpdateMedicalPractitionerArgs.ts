
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicalPractitionerWhereUniqueInput } from "./MedicalPractitionerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MedicalPractitionerUpdateInput } from "./MedicalPractitionerUpdateInput";

@ArgsType()
class UpdateMedicalPractitionerArgs {
  @ApiProperty({
    required: true,
    type: () => MedicalPractitionerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicalPractitionerWhereUniqueInput)
  @Field(() => MedicalPractitionerWhereUniqueInput, { nullable: false })
  where!: MedicalPractitionerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MedicalPractitionerUpdateInput,
  })
  @ValidateNested()
  @Type(() => MedicalPractitionerUpdateInput)
  @Field(() => MedicalPractitionerUpdateInput, { nullable: false })
  data!: MedicalPractitionerUpdateInput;
}

export { UpdateMedicalPractitionerArgs as UpdateMedicalPractitionerArgs };
