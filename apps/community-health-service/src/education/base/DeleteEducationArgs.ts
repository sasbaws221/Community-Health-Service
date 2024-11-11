
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EducationWhereUniqueInput } from "./EducationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteEducationArgs {
  @ApiProperty({
    required: true,
    type: () => EducationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EducationWhereUniqueInput)
  @Field(() => EducationWhereUniqueInput, { nullable: false })
  where!: EducationWhereUniqueInput;
}

export { DeleteEducationArgs as DeleteEducationArgs };
