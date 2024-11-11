
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EducationCreateInput } from "./EducationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateEducationArgs {
  @ApiProperty({
    required: true,
    type: () => EducationCreateInput,
  })
  @ValidateNested()
  @Type(() => EducationCreateInput)
  @Field(() => EducationCreateInput, { nullable: false })
  data!: EducationCreateInput;
}

export { CreateEducationArgs as CreateEducationArgs };
