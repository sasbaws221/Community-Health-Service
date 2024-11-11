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
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MedicalPractitionerList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Medical Practitioners"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Years Of Experience" source="yearsOfExperience" />{" "}
      </Datagrid>
    </List>
  );
};
