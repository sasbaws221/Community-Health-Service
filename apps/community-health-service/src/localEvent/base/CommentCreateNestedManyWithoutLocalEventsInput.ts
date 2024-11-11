
import { InputType, Field } from "@nestjs/graphql";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CommentCreateNestedManyWithoutLocalEventsInput {
  @Field(() => [CommentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommentWhereUniqueInput],
  })
  connect?: Array<CommentWhereUniqueInput>;
}

export { CommentCreateNestedManyWithoutLocalEventsInput as CommentCreateNestedManyWithoutLocalEventsInput };
