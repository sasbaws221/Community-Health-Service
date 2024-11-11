import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DailyActivityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Daily Activities"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Water Intake" source="waterIntake" />{" "}
      </Datagrid>
    </List>
  );
};
