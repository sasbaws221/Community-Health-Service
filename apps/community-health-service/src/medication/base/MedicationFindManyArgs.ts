
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationWhereInput } from "./MedicationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MedicationOrderByInput } from "./MedicationOrderByInput";

@ArgsType()
class MedicationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MedicationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MedicationWhereInput, { nullable: true })
  @Type(() => MedicationWhereInput)
  where?: MedicationWhereInput;

  @ApiProperty({
    required: false,
    type: [MedicationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MedicationOrderByInput], { nullable: true })
  @Type(() => MedicationOrderByInput)
  orderBy?: Array<MedicationOrderByInput>;

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

export { MedicationFindManyArgs as MedicationFindManyArgs };
