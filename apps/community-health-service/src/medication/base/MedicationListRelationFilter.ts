
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicationWhereInput } from "./MedicationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MedicationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MedicationWhereInput,
  })
  @ValidateNested()
  @Type(() => MedicationWhereInput)
  @IsOptional()
  @Field(() => MedicationWhereInput, {
    nullable: true,
  })
  every?: MedicationWhereInput;

  @ApiProperty({
    required: false,
    type: () => MedicationWhereInput,
  })
  @ValidateNested()
  @Type(() => MedicationWhereInput)
  @IsOptional()
  @Field(() => MedicationWhereInput, {
    nullable: true,
  })
  some?: MedicationWhereInput;

  @ApiProperty({
    required: false,
    type: () => MedicationWhereInput,
  })
  @ValidateNested()
  @Type(() => MedicationWhereInput)
  @IsOptional()
  @Field(() => MedicationWhereInput, {
    nullable: true,
  })
  none?: MedicationWhereInput;
}
export { MedicationListRelationFilter as MedicationListRelationFilter };
