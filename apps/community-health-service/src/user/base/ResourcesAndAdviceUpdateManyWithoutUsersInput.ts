
import { InputType, Field } from "@nestjs/graphql";
import { ResourcesAndAdviceWhereUniqueInput } from "../../resourcesAndAdvice/base/ResourcesAndAdviceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ResourcesAndAdviceUpdateManyWithoutUsersInput {
  @Field(() => [ResourcesAndAdviceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResourcesAndAdviceWhereUniqueInput],
  })
  connect?: Array<ResourcesAndAdviceWhereUniqueInput>;

  @Field(() => [ResourcesAndAdviceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResourcesAndAdviceWhereUniqueInput],
  })
  disconnect?: Array<ResourcesAndAdviceWhereUniqueInput>;

  @Field(() => [ResourcesAndAdviceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResourcesAndAdviceWhereUniqueInput],
  })
  set?: Array<ResourcesAndAdviceWhereUniqueInput>;
}

export { ResourcesAndAdviceUpdateManyWithoutUsersInput as ResourcesAndAdviceUpdateManyWithoutUsersInput };
