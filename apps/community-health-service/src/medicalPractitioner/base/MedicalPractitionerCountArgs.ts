
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicalPractitionerWhereInput } from "./MedicalPractitionerWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MedicalPractitionerCountArgs {
  @ApiProperty({
    required: false,
    type: () => MedicalPractitionerWhereInput,
  })
  @Field(() => MedicalPractitionerWhereInput, { nullable: true })
  @Type(() => MedicalPractitionerWhereInput)
  where?: MedicalPractitionerWhereInput;
}

export { MedicalPractitionerCountArgs as MedicalPractitionerCountArgs };
