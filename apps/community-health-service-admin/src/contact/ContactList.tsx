import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ContactList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Contacts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Contact" source="contact" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Message" source="message" />
        <TextField label="Name" source="name" />
        <TextField label="Status" source="status" />
        <TextField label="Subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
