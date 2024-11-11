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

export const WellnessGoalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Wellness Goals"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
