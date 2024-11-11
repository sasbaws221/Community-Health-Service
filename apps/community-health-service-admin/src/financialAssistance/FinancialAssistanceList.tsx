import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FINANCE_TITLE_FIELD } from "../finance/FinanceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FinancialAssistanceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Financial Assistances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Admin Comments" source="adminComments" />
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <ReferenceField
          label="Support Type"
          source="finance.id"
          reference="Finance"
        >
          <TextField source={FINANCE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
