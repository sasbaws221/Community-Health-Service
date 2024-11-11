import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FinancialAssistanceTitle } from "../financialAssistance/FinancialAssistanceTitle";

export const FinanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="financialAssistances.id"
          reference="FinancialAssistance"
          label="Financial Assistances"
        >
          <SelectInput optionText={FinancialAssistanceTitle} />
        </ReferenceInput>
        <TextInput label="Support Name" source="supportName" />
      </SimpleForm>
    </Create>
  );
};
