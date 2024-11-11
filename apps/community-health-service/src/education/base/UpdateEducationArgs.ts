
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EducationWhereUniqueInput } from "./EducationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EducationUpdateInput } from "./EducationUpdateInput";

@ArgsType()
class UpdateEducationArgs {
  @ApiProperty({
    required: true,
    type: () => EducationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EducationWhereUniqueInput)
  @Field(() => EducationWhereUniqueInput, { nullable: false })
  where!: EducationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EducationUpdateInput,
  })
  @ValidateNested()
  @Type(() => EducationUpdateInput)
  @Field(() => EducationUpdateInput, { nullable: false })
  data!: EducationUpdateInput;
}

export { UpdateEducationArgs as UpdateEducationArgs };
