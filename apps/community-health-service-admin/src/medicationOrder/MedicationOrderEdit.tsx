import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { MedicationTitle } from "../medication/MedicationTitle";
import { UserTitle } from "../user/UserTitle";

export const MedicationOrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Delivered At" source="deliveredAt" />
        <ReferenceArrayInput source="medication" reference="Medication">
          <SelectArrayInput
            optionText={MedicationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Ordered At" source="orderedAt" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "pending", value: "Pending" },
            { label: "shipped", value: "Shipped" },
            { label: "delivered", value: "Delivered" },
            { label: "cancelled", value: "Cancelled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
