
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationOrderWhereInput } from "./MedicationOrderWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MedicationOrderOrderByInput } from "./MedicationOrderOrderByInput";

@ArgsType()
class MedicationOrderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MedicationOrderWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MedicationOrderWhereInput, { nullable: true })
  @Type(() => MedicationOrderWhereInput)
  where?: MedicationOrderWhereInput;

  @ApiProperty({
    required: false,
    type: [MedicationOrderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MedicationOrderOrderByInput], { nullable: true })
  @Type(() => MedicationOrderOrderByInput)
  orderBy?: Array<MedicationOrderOrderByInput>;

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

export { MedicationOrderFindManyArgs as MedicationOrderFindManyArgs };
