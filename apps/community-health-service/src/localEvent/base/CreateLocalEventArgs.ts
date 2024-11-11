
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalEventCreateInput } from "./LocalEventCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateLocalEventArgs {
  @ApiProperty({
    required: true,
    type: () => LocalEventCreateInput,
  })
  @ValidateNested()
  @Type(() => LocalEventCreateInput)
  @Field(() => LocalEventCreateInput, { nullable: false })
  data!: LocalEventCreateInput;
}

export { CreateLocalEventArgs as CreateLocalEventArgs };
