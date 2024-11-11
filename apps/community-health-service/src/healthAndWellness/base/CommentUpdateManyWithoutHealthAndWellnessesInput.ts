
import { InputType, Field } from "@nestjs/graphql";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CommentUpdateManyWithoutHealthAndWellnessesInput {
  @Field(() => [CommentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommentWhereUniqueInput],
  })
  connect?: Array<CommentWhereUniqueInput>;

  @Field(() => [CommentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommentWhereUniqueInput],
  })
  disconnect?: Array<CommentWhereUniqueInput>;

  @Field(() => [CommentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommentWhereUniqueInput],
  })
  set?: Array<CommentWhereUniqueInput>;
}

export { CommentUpdateManyWithoutHealthAndWellnessesInput as CommentUpdateManyWithoutHealthAndWellnessesInput };
