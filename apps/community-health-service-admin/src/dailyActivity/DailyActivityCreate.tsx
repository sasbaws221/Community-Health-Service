import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const DailyActivityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Exercise" source="exercise" />
        <TextInput label="Meals" multiline source="meals" />
        <SelectInput
          source="mood"
          label="Mood"
          choices={[
            { label: "happy", value: "Happy" },
            { label: "neutral", value: "Neutral" },
            { label: "sad", value: "Sad" },
            { label: "stressed", value: "Stressed" },
            { label: "energetic", value: "Energetic" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Notes" multiline source="note" />
        <NumberInput label="Sleep Hours" source="sleepHours" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput label="Water Intake" source="waterIntake" />
      </SimpleForm>
    </Create>
  );
};
