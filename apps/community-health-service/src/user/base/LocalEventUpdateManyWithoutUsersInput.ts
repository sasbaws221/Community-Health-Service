/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LocalEventWhereUniqueInput } from "../../localEvent/base/LocalEventWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LocalEventUpdateManyWithoutUsersInput {
  @Field(() => [LocalEventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocalEventWhereUniqueInput],
  })
  connect?: Array<LocalEventWhereUniqueInput>;

  @Field(() => [LocalEventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocalEventWhereUniqueInput],
  })
  disconnect?: Array<LocalEventWhereUniqueInput>;

  @Field(() => [LocalEventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LocalEventWhereUniqueInput],
  })
  set?: Array<LocalEventWhereUniqueInput>;
}

export { LocalEventUpdateManyWithoutUsersInput as LocalEventUpdateManyWithoutUsersInput };
