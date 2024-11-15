
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactWhereInput } from "./ContactWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContactOrderByInput } from "./ContactOrderByInput";

@ArgsType()
class ContactFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContactWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContactWhereInput, { nullable: true })
  @Type(() => ContactWhereInput)
  where?: ContactWhereInput;

  @ApiProperty({
    required: false,
    type: [ContactOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContactOrderByInput], { nullable: true })
  @Type(() => ContactOrderByInput)
  orderBy?: Array<ContactOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ContactFindManyArgs as ContactFindManyArgs };
