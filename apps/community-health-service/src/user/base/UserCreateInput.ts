
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { CommunitySupportCreateNestedManyWithoutUsersInput } from "./CommunitySupportCreateNestedManyWithoutUsersInput";
import { DailyActivityCreateNestedManyWithoutUsersInput } from "./DailyActivityCreateNestedManyWithoutUsersInput";
import { DiscussionCreateNestedManyWithoutUsersInput } from "./DiscussionCreateNestedManyWithoutUsersInput";
import { EducationCreateNestedManyWithoutUsersInput } from "./EducationCreateNestedManyWithoutUsersInput";
import { FinancialAssistanceCreateNestedManyWithoutUsersInput } from "./FinancialAssistanceCreateNestedManyWithoutUsersInput";
import { HealthActivityCreateNestedManyWithoutUsersInput } from "./HealthActivityCreateNestedManyWithoutUsersInput";
import { HealthAndWellnessCreateNestedManyWithoutUsersInput } from "./HealthAndWellnessCreateNestedManyWithoutUsersInput";
import { LocalEventCreateNestedManyWithoutUsersInput } from "./LocalEventCreateNestedManyWithoutUsersInput";
import { MedicalPractitionerCreateNestedManyWithoutUsersInput } from "./MedicalPractitionerCreateNestedManyWithoutUsersInput";
import { MedicationOrderCreateNestedManyWithoutUsersInput } from "./MedicationOrderCreateNestedManyWithoutUsersInput";
import { ResourcesAndAdviceCreateNestedManyWithoutUsersInput } from "./ResourcesAndAdviceCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { WellnessGoalCreateNestedManyWithoutUsersInput } from "./WellnessGoalCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CommunitySupportCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommunitySupportCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommunitySupportCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  communitySupports?: CommunitySupportCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DailyActivityCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DailyActivityCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DailyActivityCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  dailyActivities?: DailyActivityCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DiscussionCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DiscussionCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DiscussionCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  discussions?: DiscussionCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => EducationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EducationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EducationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  educations?: EducationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => FinancialAssistanceCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FinancialAssistanceCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FinancialAssistanceCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  financialAssistances?: FinancialAssistanceCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => HealthActivityCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HealthActivityCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HealthActivityCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  healthActivities?: HealthActivityCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => HealthAndWellnessCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HealthAndWellnessCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HealthAndWellnessCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  healthAndWellnesses?: HealthAndWellnessCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LocalEventCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LocalEventCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LocalEventCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  localEvents?: LocalEventCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MedicalPractitionerCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MedicalPractitionerCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MedicalPractitionerCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  medicalPractitioners?: MedicalPractitionerCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MedicationOrderCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MedicationOrderCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MedicationOrderCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  medicationOrders?: MedicationOrderCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => ResourcesAndAdviceCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdviceCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ResourcesAndAdviceCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  resourcesAndAdvices?: ResourcesAndAdviceCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ReviewCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  reviews?: ReviewCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: () => WellnessGoalCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => WellnessGoalCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => WellnessGoalCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  wellnessGoals?: WellnessGoalCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
