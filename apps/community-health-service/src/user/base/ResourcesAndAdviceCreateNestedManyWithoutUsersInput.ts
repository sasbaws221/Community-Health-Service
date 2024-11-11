
import { InputType, Field } from "@nestjs/graphql";
import { ResourcesAndAdviceWhereUniqueInput } from "../../resourcesAndAdvice/base/ResourcesAndAdviceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ResourcesAndAdviceCreateNestedManyWithoutUsersInput {
  @Field(() => [ResourcesAndAdviceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResourcesAndAdviceWhereUniqueInput],
  })
  connect?: Array<ResourcesAndAdviceWhereUniqueInput>;
}

export { ResourcesAndAdviceCreateNestedManyWithoutUsersInput as ResourcesAndAdviceCreateNestedManyWithoutUsersInput };
