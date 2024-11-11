import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const CommunitySupportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="is Admin" source="isAdmin" />
        <TextInput label="Message Content" multiline source="messageContent" />
        <ReferenceInput source="sender.id" reference="User" label="Sender ">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "sent", value: "Sent" },
            { label: "received", value: "Received" },
            { label: "read", value: "Read" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
