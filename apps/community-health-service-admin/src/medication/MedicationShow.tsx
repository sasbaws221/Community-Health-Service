import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MEDICATION_TITLE_FIELD } from "./MedicationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MedicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Recommended For" source="recommendedFor" />
        <TextField label="Side Effects" source="sideEffects" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Review"
          target="medicationId"
          label="Reviews"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Medication"
              source="medication.id"
              reference="Medication"
            >
              <TextField source={MEDICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Product Type" source="productType" />
            <TextField label="Rating" source="rating" />
            <TextField label="Review" source="review" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
