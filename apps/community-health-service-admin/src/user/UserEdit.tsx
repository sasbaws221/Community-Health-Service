import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  PasswordInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { CommunitySupportTitle } from "../communitySupport/CommunitySupportTitle";
import { DailyActivityTitle } from "../dailyActivity/DailyActivityTitle";
import { DiscussionTitle } from "../discussion/DiscussionTitle";
import { EducationTitle } from "../education/EducationTitle";
import { FinancialAssistanceTitle } from "../financialAssistance/FinancialAssistanceTitle";
import { HealthActivityTitle } from "../healthActivity/HealthActivityTitle";
import { HealthAndWellnessTitle } from "../healthAndWellness/HealthAndWellnessTitle";
import { LocalEventTitle } from "../localEvent/LocalEventTitle";
import { MedicalPractitionerTitle } from "../medicalPractitioner/MedicalPractitionerTitle";
import { MedicationOrderTitle } from "../medicationOrder/MedicationOrderTitle";
import { ResourcesAndAdviceTitle } from "../resourcesAndAdvice/ResourcesAndAdviceTitle";
import { ReviewTitle } from "../review/ReviewTitle";
import { WellnessGoalTitle } from "../wellnessGoal/WellnessGoalTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="comments" reference="Comment">
          <SelectArrayInput
            optionText={CommentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="communitySupports"
          reference="CommunitySupport"
        >
          <SelectArrayInput
            optionText={CommunitySupportTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="dailyActivities" reference="DailyActivity">
          <SelectArrayInput
            optionText={DailyActivityTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="discussions" reference="Discussion">
          <SelectArrayInput
            optionText={DiscussionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="educations" reference="Education">
          <SelectArrayInput
            optionText={EducationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="financialAssistances"
          reference="FinancialAssistance"
        >
          <SelectArrayInput
            optionText={FinancialAssistanceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="healthActivities"
          reference="HealthActivity"
        >
          <SelectArrayInput
            optionText={HealthActivityTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="healthAndWellnesses"
          reference="HealthAndWellness"
        >
          <SelectArrayInput
            optionText={HealthAndWellnessTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput source="localEvents" reference="LocalEvent">
          <SelectArrayInput
            optionText={LocalEventTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="medicalPractitioners"
          reference="MedicalPractitioner"
        >
          <SelectArrayInput
            optionText={MedicalPractitionerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="medicationOrders"
          reference="MedicationOrder"
        >
          <SelectArrayInput
            optionText={MedicationOrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput
          source="resourcesAndAdvices"
          reference="ResourcesAndAdvice"
        >
          <SelectArrayInput
            optionText={ResourcesAndAdviceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="reviews" reference="Review">
          <SelectArrayInput
            optionText={ReviewTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput source="wellnessGoals" reference="WellnessGoal">
          <SelectArrayInput
            optionText={WellnessGoalTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
