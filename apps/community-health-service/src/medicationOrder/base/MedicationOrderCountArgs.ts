
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationOrderWhereInput } from "./MedicationOrderWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MedicationOrderCountArgs {
  @ApiProperty({
    required: false,
    type: () => MedicationOrderWhereInput,
  })
  @Field(() => MedicationOrderWhereInput, { nullable: true })
  @Type(() => MedicationOrderWhereInput)
  where?: MedicationOrderWhereInput;
}

export { MedicationOrderCountArgs as MedicationOrderCountArgs };
