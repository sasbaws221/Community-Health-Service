import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WellnessGoalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
