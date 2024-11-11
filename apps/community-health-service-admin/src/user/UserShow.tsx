import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DISCUSSION_TITLE_FIELD } from "../discussion/DiscussionTitle";
import { HEALTHANDWELLNESS_TITLE_FIELD } from "../healthAndWellness/HealthAndWellnessTitle";
import { LOCALEVENT_TITLE_FIELD } from "../localEvent/LocalEventTitle";
import { RESOURCESANDADVICE_TITLE_FIELD } from "../resourcesAndAdvice/ResourcesAndAdviceTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { FINANCE_TITLE_FIELD } from "../finance/FinanceTitle";
import { MEDICATION_TITLE_FIELD } from "../medication/MedicationTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Comment"
          target="userId"
          label="Comments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Discussions"
              source="discussion.id"
              reference="Discussion"
            >
              <TextField source={DISCUSSION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Health and Wellnesses"
              source="healthandwellness.id"
              reference="HealthAndWellness"
            >
              <TextField source={HEALTHANDWELLNESS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Local Events"
              source="localevent.id"
              reference="LocalEvent"
            >
              <TextField source={LOCALEVENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Resources and advices"
              source="resourcesandadvice.id"
              reference="ResourcesAndAdvice"
            >
              <TextField source={RESOURCESANDADVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CommunitySupport"
          target="senderId"
          label="Community Supports"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="is Admin" source="isAdmin" />
            <TextField label="Message Content" source="messageContent" />
            <ReferenceField label="Sender " source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DailyActivity"
          target="userId"
          label="Daily Activities"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="Exercise" source="exercise" />
            <TextField label="ID" source="id" />
            <TextField label="Meals" source="meals" />
            <TextField label="Mood" source="mood" />
            <TextField label="Notes" source="note" />
            <TextField label="Sleep Hours" source="sleepHours" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Water Intake" source="waterIntake" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Discussion"
          target="userId"
          label="Discussions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <TextField label="Title" source="title" />
            <TextField label="Topic" source="topic" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FinancialAssistance"
          target="userId"
          label="Financial Assistances"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Admin Comments" source="adminComments" />
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Support Type"
              source="finance.id"
              reference="Finance"
            >
              <TextField source={FINANCE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="HealthActivity"
          target="userId"
          label="Health Activities"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Activity" source="activity" />
            <TextField label="Activity Date" source="activityDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Duration" source="duration" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MedicalPractitioner"
          target="userId"
          label="Medical Practitioners"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Bio" source="bio" />
            <TextField label="Contact" source="contact" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="License Number" source="licenseNumber" />
            <TextField label="Specialization" source="specialization" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Years Of Experience" source="yearsOfExperience" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MedicationOrder"
          target="userId"
          label="Medication Orders"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Delivered At" source="deliveredAt" />
            <TextField label="ID" source="id" />
            <TextField label="Ordered At" source="orderedAt" />
            <TextField label="Quantity" source="quantity" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Review" target="userId" label="Reviews">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Medication"
              source="medication.id"
              reference="Medication"
            >
              <TextField source={MEDICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Product Type" source="productType" />
            <TextField label="Rating" source="rating" />
            <TextField label="Review" source="review" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WellnessGoal"
          target="userId"
          label="Wellness Goals"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Current Progress" source="currentProgress" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Frequency" source="frequency" />
            <TextField label="Goal " source="goal" />
            <TextField label="ID" source="id" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="Status" source="status" />
            <TextField label="Target Value" source="targetValue" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
