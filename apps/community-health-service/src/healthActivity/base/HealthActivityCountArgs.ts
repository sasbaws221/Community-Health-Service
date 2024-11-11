
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthActivityWhereInput } from "./HealthActivityWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class HealthActivityCountArgs {
  @ApiProperty({
    required: false,
    type: () => HealthActivityWhereInput,
  })
  @Field(() => HealthActivityWhereInput, { nullable: true })
  @Type(() => HealthActivityWhereInput)
  where?: HealthActivityWhereInput;
}

export { HealthActivityCountArgs as HealthActivityCountArgs };
