
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "../../comment/base/Comment";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { CommunitySupport } from "../../communitySupport/base/CommunitySupport";
import { DailyActivity } from "../../dailyActivity/base/DailyActivity";
import { Discussion } from "../../discussion/base/Discussion";
import { Education } from "../../education/base/Education";
import { FinancialAssistance } from "../../financialAssistance/base/FinancialAssistance";
import { HealthActivity } from "../../healthActivity/base/HealthActivity";
import { HealthAndWellness } from "../../healthAndWellness/base/HealthAndWellness";
import { LocalEvent } from "../../localEvent/base/LocalEvent";
import { MedicalPractitioner } from "../../medicalPractitioner/base/MedicalPractitioner";
import { MedicationOrder } from "../../medicationOrder/base/MedicationOrder";
import { ResourcesAndAdvice } from "../../resourcesAndAdvice/base/ResourcesAndAdvice";
import { Review } from "../../review/base/Review";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { WellnessGoal } from "../../wellnessGoal/base/WellnessGoal";

@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: () => [Comment],
  })
  @ValidateNested()
  @Type(() => Comment)
  @IsOptional()
  comments?: Array<Comment>;

  @ApiProperty({
    required: false,
    type: () => [CommunitySupport],
  })
  @ValidateNested()
  @Type(() => CommunitySupport)
  @IsOptional()
  communitySupports?: Array<CommunitySupport>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [DailyActivity],
  })
  @ValidateNested()
  @Type(() => DailyActivity)
  @IsOptional()
  dailyActivities?: Array<DailyActivity>;

  @ApiProperty({
    required: false,
    type: () => [Discussion],
  })
  @ValidateNested()
  @Type(() => Discussion)
  @IsOptional()
  discussions?: Array<Discussion>;

  @ApiProperty({
    required: false,
    type: () => [Education],
  })
  @ValidateNested()
  @Type(() => Education)
  @IsOptional()
  educations?: Array<Education>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: false,
    type: () => [FinancialAssistance],
  })
  @ValidateNested()
  @Type(() => FinancialAssistance)
  @IsOptional()
  financialAssistances?: Array<FinancialAssistance>;

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
  firstName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [HealthActivity],
  })
  @ValidateNested()
  @Type(() => HealthActivity)
  @IsOptional()
  healthActivities?: Array<HealthActivity>;

  @ApiProperty({
    required: false,
    type: () => [HealthAndWellness],
  })
  @ValidateNested()
  @Type(() => HealthAndWellness)
  @IsOptional()
  healthAndWellnesses?: Array<HealthAndWellness>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive!: boolean | null;

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
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [LocalEvent],
  })
  @ValidateNested()
  @Type(() => LocalEvent)
  @IsOptional()
  localEvents?: Array<LocalEvent>;

  @ApiProperty({
    required: false,
    type: () => [MedicalPractitioner],
  })
  @ValidateNested()
  @Type(() => MedicalPractitioner)
  @IsOptional()
  medicalPractitioners?: Array<MedicalPractitioner>;

  @ApiProperty({
    required: false,
    type: () => [MedicationOrder],
  })
  @ValidateNested()
  @Type(() => MedicationOrder)
  @IsOptional()
  medicationOrders?: Array<MedicationOrder>;

  @ApiProperty({
    required: false,
    type: () => [ResourcesAndAdvice],
  })
  @ValidateNested()
  @Type(() => ResourcesAndAdvice)
  @IsOptional()
  resourcesAndAdvices?: Array<ResourcesAndAdvice>;

  @ApiProperty({
    required: false,
    type: () => [Review],
  })
  @ValidateNested()
  @Type(() => Review)
  @IsOptional()
  reviews?: Array<Review>;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: () => [WellnessGoal],
  })
  @ValidateNested()
  @Type(() => WellnessGoal)
  @IsOptional()
  wellnessGoals?: Array<WellnessGoal>;
}

export { User as User };
