import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FINANCIALASSISTANCE_TITLE_FIELD } from "../financialAssistance/FinancialAssistanceTitle";

export const FinanceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Finances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <ReferenceField
          label="Financial Assistances"
          source="financialassistance.id"
          reference="FinancialAssistance"
        >
          <TextField source={FINANCIALASSISTANCE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Support Name" source="supportName" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
