import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { MedicationTitle } from "../medication/MedicationTitle";
import { UserTitle } from "../user/UserTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="medication.id"
          reference="Medication"
          label="Medication"
        >
          <SelectInput optionText={MedicationTitle} />
        </ReferenceInput>
        <SelectInput
          source="productType"
          label="Product Type"
          choices={[
            { label: "doctor", value: "Doctor" },
            { label: "services", value: "Services" },
            { label: "medication", value: "Medication" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="rating"
          label="Rating"
          choices={[
            { label: "one", value: "One" },
            { label: "two", value: "Two" },
            { label: "three", value: "Three" },
            { label: "four", value: "Four" },
            { label: "five", value: "Five" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Review" multiline source="review" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
