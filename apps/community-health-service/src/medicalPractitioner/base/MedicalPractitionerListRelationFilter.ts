
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicalPractitionerWhereInput } from "./MedicalPractitionerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MedicalPractitionerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MedicalPractitionerWhereInput,
  })
  @ValidateNested()
  @Type(() => MedicalPractitionerWhereInput)
  @IsOptional()
  @Field(() => MedicalPractitionerWhereInput, {
    nullable: true,
  })
  every?: MedicalPractitionerWhereInput;

  @ApiProperty({
    required: false,
    type: () => MedicalPractitionerWhereInput,
  })
  @ValidateNested()
  @Type(() => MedicalPractitionerWhereInput)
  @IsOptional()
  @Field(() => MedicalPractitionerWhereInput, {
    nullable: true,
  })
  some?: MedicalPractitionerWhereInput;

  @ApiProperty({
    required: false,
    type: () => MedicalPractitionerWhereInput,
  })
  @ValidateNested()
  @Type(() => MedicalPractitionerWhereInput)
  @IsOptional()
  @Field(() => MedicalPractitionerWhereInput, {
    nullable: true,
  })
  none?: MedicalPractitionerWhereInput;
}
export { MedicalPractitionerListRelationFilter as MedicalPractitionerListRelationFilter };
