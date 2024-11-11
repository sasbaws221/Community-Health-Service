
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { CommunitySupportUpdateManyWithoutUsersInput } from "./CommunitySupportUpdateManyWithoutUsersInput";
import { DailyActivityUpdateManyWithoutUsersInput } from "./DailyActivityUpdateManyWithoutUsersInput";
import { DiscussionUpdateManyWithoutUsersInput } from "./DiscussionUpdateManyWithoutUsersInput";
import { EducationUpdateManyWithoutUsersInput } from "./EducationUpdateManyWithoutUsersInput";
import { FinancialAssistanceUpdateManyWithoutUsersInput } from "./FinancialAssistanceUpdateManyWithoutUsersInput";
import { HealthActivityUpdateManyWithoutUsersInput } from "./HealthActivityUpdateManyWithoutUsersInput";
import { HealthAndWellnessUpdateManyWithoutUsersInput } from "./HealthAndWellnessUpdateManyWithoutUsersInput";
import { LocalEventUpdateManyWithoutUsersInput } from "./LocalEventUpdateManyWithoutUsersInput";
import { MedicalPractitionerUpdateManyWithoutUsersInput } from "./MedicalPractitionerUpdateManyWithoutUsersInput";
import { MedicationOrderUpdateManyWithoutUsersInput } from "./MedicationOrderUpdateManyWithoutUsersInput";
import { ResourcesAndAdviceUpdateManyWithoutUsersInput } from "./ResourcesAndAdviceUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { WellnessGoalUpdateManyWithoutUsersInput } from "./WellnessGoalUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CommunitySupportUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommunitySupportUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommunitySupportUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  communitySupports?: CommunitySupportUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DailyActivityUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DailyActivityUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DailyActivityUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  dailyActivities?: DailyActivityUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DiscussionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DiscussionUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DiscussionUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  discussions?: DiscussionUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => EducationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EducationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EducationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  educations?: EducationUpdateManyWithoutUsersInput;

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
    type: () => FinancialAssistanceUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FinancialAssistanceUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FinancialAssistanceUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  financialAssistances?: FinancialAssistanceUpdateManyWithoutUsersInput;

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
    type: () => HealthActivityUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HealthActivityUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HealthActivityUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  healthActivities?: HealthActivityUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => HealthAndWellnessUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HealthAndWellnessUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HealthAndWellnessUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  healthAndWellnesses?: HealthAndWellnessUpdateManyWithoutUsersInput;

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
    type: () => LocalEventUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LocalEventUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LocalEventUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  localEvents?: LocalEventUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MedicalPractitionerUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MedicalPractitionerUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MedicalPractitionerUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  medicalPractitioners?: MedicalPractitionerUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MedicationOrderUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MedicationOrderUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MedicationOrderUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  medicationOrders?: MedicationOrderUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: () => ResourcesAndAdviceUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdviceUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ResourcesAndAdviceUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  resourcesAndAdvices?: ResourcesAndAdviceUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  reviews?: ReviewUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: () => WellnessGoalUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => WellnessGoalUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => WellnessGoalUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  wellnessGoals?: WellnessGoalUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };
