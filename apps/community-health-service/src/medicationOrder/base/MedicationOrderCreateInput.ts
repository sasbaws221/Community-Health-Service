
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  ValidateNested,
  IsInt,
  Min,
  Max,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { MedicationCreateNestedManyWithoutMedicationOrdersInput } from "./MedicationCreateNestedManyWithoutMedicationOrdersInput";
import { EnumMedicationOrderStatus } from "./EnumMedicationOrderStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class MedicationOrderCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deliveredAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => MedicationCreateNestedManyWithoutMedicationOrdersInput,
  })
  @ValidateNested()
  @Type(() => MedicationCreateNestedManyWithoutMedicationOrdersInput)
  @IsOptional()
  @Field(() => MedicationCreateNestedManyWithoutMedicationOrdersInput, {
    nullable: true,
  })
  medication?: MedicationCreateNestedManyWithoutMedicationOrdersInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(1)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumMedicationOrderStatus,
  })
  @IsEnum(EnumMedicationOrderStatus)
  @IsOptional()
  @Field(() => EnumMedicationOrderStatus, {
    nullable: true,
  })
  status?: "Pending" | "Shipped" | "Delivered" | "Cancelled" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { MedicationOrderCreateInput as MedicationOrderCreateInput };
