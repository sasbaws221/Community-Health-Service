
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicalPractitionerWhereUniqueInput } from "./MedicalPractitionerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class MedicalPractitionerFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => MedicalPractitionerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicalPractitionerWhereUniqueInput)
  @Field(() => MedicalPractitionerWhereUniqueInput, { nullable: false })
  where!: MedicalPractitionerWhereUniqueInput;
}

export { MedicalPractitionerFindUniqueArgs as MedicalPractitionerFindUniqueArgs };
