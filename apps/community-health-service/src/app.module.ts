import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { DiscussionModule } from "./discussion/discussion.module";
import { CommentModule } from "./comment/comment.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { ContactModule } from "./contact/contact.module";
import { LocalEventModule } from "./localEvent/localEvent.module";
import { HealthAndWellnessModule } from "./healthAndWellness/healthAndWellness.module";
import { ResourcesAndAdviceModule } from "./resourcesAndAdvice/resourcesAndAdvice.module";
import { DailyActivityModule } from "./dailyActivity/dailyActivity.module";
import { WellnessGoalModule } from "./wellnessGoal/wellnessGoal.module";
import { HealthActivityModule } from "./healthActivity/healthActivity.module";
import { EducationModule } from "./education/education.module";
import { CommunitySupportModule } from "./communitySupport/communitySupport.module";
import { FinancialAssistanceModule } from "./financialAssistance/financialAssistance.module";
import { FinanceModule } from "./finance/finance.module";
import { MedicationModule } from "./medication/medication.module";
import { MedicationOrderModule } from "./medicationOrder/medicationOrder.module";
import { ReviewModule } from "./review/review.module";
import { CategoryModule } from "./category/category.module";
import { MedicalPractitionerModule } from "./medicalPractitioner/medicalPractitioner.module";
import { CompanyModule } from "./company/company.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    DiscussionModule,
    CommentModule,
    AppointmentModule,
    ContactModule,
    LocalEventModule,
    HealthAndWellnessModule,
    ResourcesAndAdviceModule,
    DailyActivityModule,
    WellnessGoalModule,
    HealthActivityModule,
    EducationModule,
    CommunitySupportModule,
    FinancialAssistanceModule,
    FinanceModule,
    MedicationModule,
    MedicationOrderModule,
    ReviewModule,
    CategoryModule,
    MedicalPractitionerModule,
    CompanyModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
