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

export const DailyActivityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
