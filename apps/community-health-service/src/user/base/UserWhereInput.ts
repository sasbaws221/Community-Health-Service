
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentListRelationFilter } from "../../comment/base/CommentListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CommunitySupportListRelationFilter } from "../../communitySupport/base/CommunitySupportListRelationFilter";
import { DailyActivityListRelationFilter } from "../../dailyActivity/base/DailyActivityListRelationFilter";
import { DiscussionListRelationFilter } from "../../discussion/base/DiscussionListRelationFilter";
import { EducationListRelationFilter } from "../../education/base/EducationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FinancialAssistanceListRelationFilter } from "../../financialAssistance/base/FinancialAssistanceListRelationFilter";
import { HealthActivityListRelationFilter } from "../../healthActivity/base/HealthActivityListRelationFilter";
import { HealthAndWellnessListRelationFilter } from "../../healthAndWellness/base/HealthAndWellnessListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LocalEventListRelationFilter } from "../../localEvent/base/LocalEventListRelationFilter";
import { MedicalPractitionerListRelationFilter } from "../../medicalPractitioner/base/MedicalPractitionerListRelationFilter";
import { MedicationOrderListRelationFilter } from "../../medicationOrder/base/MedicationOrderListRelationFilter";
import { ResourcesAndAdviceListRelationFilter } from "../../resourcesAndAdvice/base/ResourcesAndAdviceListRelationFilter";
import { ReviewListRelationFilter } from "../../review/base/ReviewListRelationFilter";
import { WellnessGoalListRelationFilter } from "../../wellnessGoal/base/WellnessGoalListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => CommentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommentListRelationFilter)
  @IsOptional()
  @Field(() => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CommunitySupportListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommunitySupportListRelationFilter)
  @IsOptional()
  @Field(() => CommunitySupportListRelationFilter, {
    nullable: true,
  })
  communitySupports?: CommunitySupportListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DailyActivityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DailyActivityListRelationFilter)
  @IsOptional()
  @Field(() => DailyActivityListRelationFilter, {
    nullable: true,
  })
  dailyActivities?: DailyActivityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DiscussionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DiscussionListRelationFilter)
  @IsOptional()
  @Field(() => DiscussionListRelationFilter, {
    nullable: true,
  })
  discussions?: DiscussionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => EducationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EducationListRelationFilter)
  @IsOptional()
  @Field(() => EducationListRelationFilter, {
    nullable: true,
  })
  educations?: EducationListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FinancialAssistanceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FinancialAssistanceListRelationFilter)
  @IsOptional()
  @Field(() => FinancialAssistanceListRelationFilter, {
    nullable: true,
  })
  financialAssistances?: FinancialAssistanceListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => HealthActivityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HealthActivityListRelationFilter)
  @IsOptional()
  @Field(() => HealthActivityListRelationFilter, {
    nullable: true,
  })
  healthActivities?: HealthActivityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => HealthAndWellnessListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HealthAndWellnessListRelationFilter)
  @IsOptional()
  @Field(() => HealthAndWellnessListRelationFilter, {
    nullable: true,
  })
  healthAndWellnesses?: HealthAndWellnessListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isActive?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => LocalEventListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LocalEventListRelationFilter)
  @IsOptional()
  @Field(() => LocalEventListRelationFilter, {
    nullable: true,
  })
  localEvents?: LocalEventListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MedicalPractitionerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MedicalPractitionerListRelationFilter)
  @IsOptional()
  @Field(() => MedicalPractitionerListRelationFilter, {
    nullable: true,
  })
  medicalPractitioners?: MedicalPractitionerListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MedicationOrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MedicationOrderListRelationFilter)
  @IsOptional()
  @Field(() => MedicationOrderListRelationFilter, {
    nullable: true,
  })
  medicationOrders?: MedicationOrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ResourcesAndAdviceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdviceListRelationFilter)
  @IsOptional()
  @Field(() => ResourcesAndAdviceListRelationFilter, {
    nullable: true,
  })
  resourcesAndAdvices?: ResourcesAndAdviceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ReviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReviewListRelationFilter)
  @IsOptional()
  @Field(() => ReviewListRelationFilter, {
    nullable: true,
  })
  reviews?: ReviewListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => WellnessGoalListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WellnessGoalListRelationFilter)
  @IsOptional()
  @Field(() => WellnessGoalListRelationFilter, {
    nullable: true,
  })
  wellnessGoals?: WellnessGoalListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
