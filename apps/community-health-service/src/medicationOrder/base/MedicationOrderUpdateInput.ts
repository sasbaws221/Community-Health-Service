
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
import { MedicationUpdateManyWithoutMedicationOrdersInput } from "./MedicationUpdateManyWithoutMedicationOrdersInput";
import { EnumMedicationOrderStatus } from "./EnumMedicationOrderStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class MedicationOrderUpdateInput {
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
    type: () => MedicationUpdateManyWithoutMedicationOrdersInput,
  })
  @ValidateNested()
  @Type(() => MedicationUpdateManyWithoutMedicationOrdersInput)
  @IsOptional()
  @Field(() => MedicationUpdateManyWithoutMedicationOrdersInput, {
    nullable: true,
  })
  medication?: MedicationUpdateManyWithoutMedicationOrdersInput;

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

export { MedicationOrderUpdateInput as MedicationOrderUpdateInput };
