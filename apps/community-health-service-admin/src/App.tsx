import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DiscussionList } from "./discussion/DiscussionList";
import { DiscussionCreate } from "./discussion/DiscussionCreate";
import { DiscussionEdit } from "./discussion/DiscussionEdit";
import { DiscussionShow } from "./discussion/DiscussionShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { LocalEventList } from "./localEvent/LocalEventList";
import { LocalEventCreate } from "./localEvent/LocalEventCreate";
import { LocalEventEdit } from "./localEvent/LocalEventEdit";
import { LocalEventShow } from "./localEvent/LocalEventShow";
import { HealthAndWellnessList } from "./healthAndWellness/HealthAndWellnessList";
import { HealthAndWellnessCreate } from "./healthAndWellness/HealthAndWellnessCreate";
import { HealthAndWellnessEdit } from "./healthAndWellness/HealthAndWellnessEdit";
import { HealthAndWellnessShow } from "./healthAndWellness/HealthAndWellnessShow";
import { ResourcesAndAdviceList } from "./resourcesAndAdvice/ResourcesAndAdviceList";
import { ResourcesAndAdviceCreate } from "./resourcesAndAdvice/ResourcesAndAdviceCreate";
import { ResourcesAndAdviceEdit } from "./resourcesAndAdvice/ResourcesAndAdviceEdit";
import { ResourcesAndAdviceShow } from "./resourcesAndAdvice/ResourcesAndAdviceShow";
import { DailyActivityList } from "./dailyActivity/DailyActivityList";
import { DailyActivityCreate } from "./dailyActivity/DailyActivityCreate";
import { DailyActivityEdit } from "./dailyActivity/DailyActivityEdit";
import { DailyActivityShow } from "./dailyActivity/DailyActivityShow";
import { WellnessGoalList } from "./wellnessGoal/WellnessGoalList";
import { WellnessGoalCreate } from "./wellnessGoal/WellnessGoalCreate";
import { WellnessGoalEdit } from "./wellnessGoal/WellnessGoalEdit";
import { WellnessGoalShow } from "./wellnessGoal/WellnessGoalShow";
import { HealthActivityList } from "./healthActivity/HealthActivityList";
import { HealthActivityCreate } from "./healthActivity/HealthActivityCreate";
import { HealthActivityEdit } from "./healthActivity/HealthActivityEdit";
import { HealthActivityShow } from "./healthActivity/HealthActivityShow";
import { EducationList } from "./education/EducationList";
import { EducationCreate } from "./education/EducationCreate";
import { EducationEdit } from "./education/EducationEdit";
import { EducationShow } from "./education/EducationShow";
import { CommunitySupportList } from "./communitySupport/CommunitySupportList";
import { CommunitySupportCreate } from "./communitySupport/CommunitySupportCreate";
import { CommunitySupportEdit } from "./communitySupport/CommunitySupportEdit";
import { CommunitySupportShow } from "./communitySupport/CommunitySupportShow";
import { FinancialAssistanceList } from "./financialAssistance/FinancialAssistanceList";
import { FinancialAssistanceCreate } from "./financialAssistance/FinancialAssistanceCreate";
import { FinancialAssistanceEdit } from "./financialAssistance/FinancialAssistanceEdit";
import { FinancialAssistanceShow } from "./financialAssistance/FinancialAssistanceShow";
import { FinanceList } from "./finance/FinanceList";
import { FinanceCreate } from "./finance/FinanceCreate";
import { FinanceEdit } from "./finance/FinanceEdit";
import { FinanceShow } from "./finance/FinanceShow";
import { MedicationList } from "./medication/MedicationList";
import { MedicationCreate } from "./medication/MedicationCreate";
import { MedicationEdit } from "./medication/MedicationEdit";
import { MedicationShow } from "./medication/MedicationShow";
import { MedicationOrderList } from "./medicationOrder/MedicationOrderList";
import { MedicationOrderCreate } from "./medicationOrder/MedicationOrderCreate";
import { MedicationOrderEdit } from "./medicationOrder/MedicationOrderEdit";
import { MedicationOrderShow } from "./medicationOrder/MedicationOrderShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { MedicalPractitionerList } from "./medicalPractitioner/MedicalPractitionerList";
import { MedicalPractitionerCreate } from "./medicalPractitioner/MedicalPractitionerCreate";
import { MedicalPractitionerEdit } from "./medicalPractitioner/MedicalPractitionerEdit";
import { MedicalPractitionerShow } from "./medicalPractitioner/MedicalPractitionerShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Community Health Service"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Discussion"
          list={DiscussionList}
          edit={DiscussionEdit}
          create={DiscussionCreate}
          show={DiscussionShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="LocalEvent"
          list={LocalEventList}
          edit={LocalEventEdit}
          create={LocalEventCreate}
          show={LocalEventShow}
        />
        <Resource
          name="HealthAndWellness"
          list={HealthAndWellnessList}
          edit={HealthAndWellnessEdit}
          create={HealthAndWellnessCreate}
          show={HealthAndWellnessShow}
        />
        <Resource
          name="ResourcesAndAdvice"
          list={ResourcesAndAdviceList}
          edit={ResourcesAndAdviceEdit}
          create={ResourcesAndAdviceCreate}
          show={ResourcesAndAdviceShow}
        />
        <Resource
          name="DailyActivity"
          list={DailyActivityList}
          edit={DailyActivityEdit}
          create={DailyActivityCreate}
          show={DailyActivityShow}
        />
        <Resource
          name="WellnessGoal"
          list={WellnessGoalList}
          edit={WellnessGoalEdit}
          create={WellnessGoalCreate}
          show={WellnessGoalShow}
        />
        <Resource
          name="HealthActivity"
          list={HealthActivityList}
          edit={HealthActivityEdit}
          create={HealthActivityCreate}
          show={HealthActivityShow}
        />
        <Resource
          name="Education"
          list={EducationList}
          edit={EducationEdit}
          create={EducationCreate}
          show={EducationShow}
        />
        <Resource
          name="CommunitySupport"
          list={CommunitySupportList}
          edit={CommunitySupportEdit}
          create={CommunitySupportCreate}
          show={CommunitySupportShow}
        />
        <Resource
          name="FinancialAssistance"
          list={FinancialAssistanceList}
          edit={FinancialAssistanceEdit}
          create={FinancialAssistanceCreate}
          show={FinancialAssistanceShow}
        />
        <Resource
          name="Finance"
          list={FinanceList}
          edit={FinanceEdit}
          create={FinanceCreate}
          show={FinanceShow}
        />
        <Resource
          name="Medication"
          list={MedicationList}
          edit={MedicationEdit}
          create={MedicationCreate}
          show={MedicationShow}
        />
        <Resource
          name="MedicationOrder"
          list={MedicationOrderList}
          edit={MedicationOrderEdit}
          create={MedicationOrderCreate}
          show={MedicationOrderShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="MedicalPractitioner"
          list={MedicalPractitionerList}
          edit={MedicalPractitionerEdit}
          create={MedicalPractitionerCreate}
          show={MedicalPractitionerShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
