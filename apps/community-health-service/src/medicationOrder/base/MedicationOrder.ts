
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  ValidateNested,
  IsInt,
  Min,
  Max,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Medication } from "../../medication/base/Medication";
import { EnumMedicationOrderStatus } from "./EnumMedicationOrderStatus";
import { User } from "../../user/base/User";

@ObjectType()
class MedicationOrder {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deliveredAt!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Medication],
  })
  @ValidateNested()
  @Type(() => Medication)
  @IsOptional()
  medication?: Array<Medication>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderedAt!: Date | null;

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
  quantity!: number | null;

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
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { MedicationOrder as MedicationOrder };
