import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MedicationOrderTitle } from "../medicationOrder/MedicationOrderTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const MedicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="medicationOrders"
          reference="MedicationOrder"
        >
          <SelectArrayInput
            optionText={MedicationOrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Recommended For" multiline source="recommendedFor" />
        <ReferenceArrayInput source="reviews" reference="Review">
          <SelectArrayInput
            optionText={ReviewTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Side Effects" multiline source="sideEffects" />
      </SimpleForm>
    </Create>
  );
};
