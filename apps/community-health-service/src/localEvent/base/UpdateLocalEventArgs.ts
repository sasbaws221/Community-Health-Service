/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalEventWhereUniqueInput } from "./LocalEventWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LocalEventUpdateInput } from "./LocalEventUpdateInput";

@ArgsType()
class UpdateLocalEventArgs {
  @ApiProperty({
    required: true,
    type: () => LocalEventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocalEventWhereUniqueInput)
  @Field(() => LocalEventWhereUniqueInput, { nullable: false })
  where!: LocalEventWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LocalEventUpdateInput,
  })
  @ValidateNested()
  @Type(() => LocalEventUpdateInput)
  @Field(() => LocalEventUpdateInput, { nullable: false })
  data!: LocalEventUpdateInput;
}

export { UpdateLocalEventArgs as UpdateLocalEventArgs };
