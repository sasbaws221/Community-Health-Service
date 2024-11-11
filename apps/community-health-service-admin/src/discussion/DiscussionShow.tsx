import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DISCUSSION_TITLE_FIELD } from "./DiscussionTitle";
import { HEALTHANDWELLNESS_TITLE_FIELD } from "../healthAndWellness/HealthAndWellnessTitle";
import { LOCALEVENT_TITLE_FIELD } from "../localEvent/LocalEventTitle";
import { RESOURCESANDADVICE_TITLE_FIELD } from "../resourcesAndAdvice/ResourcesAndAdviceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DiscussionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Comment"
          target="discussionsId"
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
