import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DISCUSSION_TITLE_FIELD } from "../discussion/DiscussionTitle";
import { HEALTHANDWELLNESS_TITLE_FIELD } from "../healthAndWellness/HealthAndWellnessTitle";
import { LOCALEVENT_TITLE_FIELD } from "../localEvent/LocalEventTitle";
import { RESOURCESANDADVICE_TITLE_FIELD } from "../resourcesAndAdvice/ResourcesAndAdviceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
