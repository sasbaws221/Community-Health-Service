
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalEventWhereInput } from "./LocalEventWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class LocalEventCountArgs {
  @ApiProperty({
    required: false,
    type: () => LocalEventWhereInput,
  })
  @Field(() => LocalEventWhereInput, { nullable: true })
  @Type(() => LocalEventWhereInput)
  where?: LocalEventWhereInput;
}

export { LocalEventCountArgs as LocalEventCountArgs };
