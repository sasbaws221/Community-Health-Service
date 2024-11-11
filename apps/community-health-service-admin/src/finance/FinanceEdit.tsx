import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FinancialAssistanceTitle } from "../financialAssistance/FinancialAssistanceTitle";

export const FinanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
