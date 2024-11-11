import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DISCUSSION_TITLE_FIELD } from "../discussion/DiscussionTitle";
import { HEALTHANDWELLNESS_TITLE_FIELD } from "./HealthAndWellnessTitle";
import { LOCALEVENT_TITLE_FIELD } from "../localEvent/LocalEventTitle";
import { RESOURCESANDADVICE_TITLE_FIELD } from "../resourcesAndAdvice/ResourcesAndAdviceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const HealthAndWellnessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Tags" source="tags" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="healthAndWellnessesId"
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
