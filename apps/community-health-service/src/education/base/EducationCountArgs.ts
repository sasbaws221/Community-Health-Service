
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EducationWhereInput } from "./EducationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class EducationCountArgs {
  @ApiProperty({
    required: false,
    type: () => EducationWhereInput,
  })
  @Field(() => EducationWhereInput, { nullable: true })
  @Type(() => EducationWhereInput)
  where?: EducationWhereInput;
}

export { EducationCountArgs as EducationCountArgs };
