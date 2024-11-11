
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationWhereInput } from "./MedicationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MedicationCountArgs {
  @ApiProperty({
    required: false,
    type: () => MedicationWhereInput,
  })
  @Field(() => MedicationWhereInput, { nullable: true })
  @Type(() => MedicationWhereInput)
  where?: MedicationWhereInput;
}

export { MedicationCountArgs as MedicationCountArgs };
