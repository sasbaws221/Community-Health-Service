
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthActivityWhereUniqueInput } from "./HealthActivityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HealthActivityUpdateInput } from "./HealthActivityUpdateInput";

@ArgsType()
class UpdateHealthActivityArgs {
  @ApiProperty({
    required: true,
    type: () => HealthActivityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HealthActivityWhereUniqueInput)
  @Field(() => HealthActivityWhereUniqueInput, { nullable: false })
  where!: HealthActivityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HealthActivityUpdateInput,
  })
  @ValidateNested()
  @Type(() => HealthActivityUpdateInput)
  @Field(() => HealthActivityUpdateInput, { nullable: false })
  data!: HealthActivityUpdateInput;
}

export { UpdateHealthActivityArgs as UpdateHealthActivityArgs };
