import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Contact" source="contact" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Message" source="message" />
        <TextInput label="Name" source="name" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "new", value: "New" },
            { label: "read", value: "Read" },
            { label: "responded", value: "Responded" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Subject" multiline source="subject" />
      </SimpleForm>
    </Create>
  );
};
