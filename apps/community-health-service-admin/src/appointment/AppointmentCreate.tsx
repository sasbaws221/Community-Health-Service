import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Contact" source="contact" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Location" source="location" />
        <TextInput label="Message" source="message" />
        <TextInput label="Name" source="name" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "scheduled", value: "Scheduled" },
            { label: "completed", value: "Completed" },
            { label: "cancelled", value: "Cancelled" },
            { label: "rescheduled", value: "Rescheduled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
