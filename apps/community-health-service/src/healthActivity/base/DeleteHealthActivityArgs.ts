
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthActivityWhereUniqueInput } from "./HealthActivityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteHealthActivityArgs {
  @ApiProperty({
    required: true,
    type: () => HealthActivityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HealthActivityWhereUniqueInput)
  @Field(() => HealthActivityWhereUniqueInput, { nullable: false })
  where!: HealthActivityWhereUniqueInput;
}

export { DeleteHealthActivityArgs as DeleteHealthActivityArgs };
