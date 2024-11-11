import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { FinanceTitle } from "../finance/FinanceTitle";
import { UserTitle } from "../user/UserTitle";

export const FinancialAssistanceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Admin Comments" multiline source="adminComments" />
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Description" multiline source="description" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "pending", value: "Pending" },
            { label: "approval", value: "Approval" },
            { label: "rejected", value: "Rejected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="supportType.id"
          reference="Finance"
          label="Support Type"
        >
          <SelectInput optionText={FinanceTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
