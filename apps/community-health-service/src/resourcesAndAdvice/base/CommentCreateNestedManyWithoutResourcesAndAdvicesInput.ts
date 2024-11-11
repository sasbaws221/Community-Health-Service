
import { InputType, Field } from "@nestjs/graphql";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CommentCreateNestedManyWithoutResourcesAndAdvicesInput {
  @Field(() => [CommentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommentWhereUniqueInput],
  })
  connect?: Array<CommentWhereUniqueInput>;
}

export { CommentCreateNestedManyWithoutResourcesAndAdvicesInput as CommentCreateNestedManyWithoutResourcesAndAdvicesInput };
