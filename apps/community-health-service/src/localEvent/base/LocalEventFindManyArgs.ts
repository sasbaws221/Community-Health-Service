
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalEventWhereInput } from "./LocalEventWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LocalEventOrderByInput } from "./LocalEventOrderByInput";

@ArgsType()
class LocalEventFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LocalEventWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LocalEventWhereInput, { nullable: true })
  @Type(() => LocalEventWhereInput)
  where?: LocalEventWhereInput;

  @ApiProperty({
    required: false,
    type: [LocalEventOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LocalEventOrderByInput], { nullable: true })
  @Type(() => LocalEventOrderByInput)
  orderBy?: Array<LocalEventOrderByInput>;

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

export { LocalEventFindManyArgs as LocalEventFindManyArgs };
