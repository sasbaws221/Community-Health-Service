import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DISCUSSION_TITLE_FIELD } from "../discussion/DiscussionTitle";
import { HEALTHANDWELLNESS_TITLE_FIELD } from "../healthAndWellness/HealthAndWellnessTitle";
import { LOCALEVENT_TITLE_FIELD } from "./LocalEventTitle";
import { RESOURCESANDADVICE_TITLE_FIELD } from "../resourcesAndAdvice/ResourcesAndAdviceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LocalEventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Category" source="category" />
        <TextField label="Contact" source="contact" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Event Date" source="eventDate" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="localEventsId"
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
      </SimpleShowLayout>
    </Show>
  );
};
