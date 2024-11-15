
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicalPractitionerWhereInput } from "./MedicalPractitionerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MedicalPractitionerOrderByInput } from "./MedicalPractitionerOrderByInput";

@ArgsType()
class MedicalPractitionerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MedicalPractitionerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MedicalPractitionerWhereInput, { nullable: true })
  @Type(() => MedicalPractitionerWhereInput)
  where?: MedicalPractitionerWhereInput;

  @ApiProperty({
    required: false,
    type: [MedicalPractitionerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MedicalPractitionerOrderByInput], { nullable: true })
  @Type(() => MedicalPractitionerOrderByInput)
  orderBy?: Array<MedicalPractitionerOrderByInput>;

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

export { MedicalPractitionerFindManyArgs as MedicalPractitionerFindManyArgs };
