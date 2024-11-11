import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const WellnessGoalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Current Progress" source="currentProgress" />
        <DateTimeInput label="End Date" source="endDate" />
        <SelectInput
          source="frequency"
          label="Frequency"
          choices={[
            { label: "daily", value: "Daily" },
            { label: "weekly", value: "Weekly" },
            { label: "monthly", value: "Monthly" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Goal " source="goal" />
        <DateTimeInput label="Start Date" source="startDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "in progress", value: "InProgress" },
            { label: "completed", value: "Completed" },
            { label: "paused", value: "Paused" },
            { label: "cancelled", value: "Cancelled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Target Value" source="targetValue" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
