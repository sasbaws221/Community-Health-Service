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
import { HEALTHANDWELLNESS_TITLE_FIELD } from "../healthAndWellness/HealthAndWellnessTitle";

export const CategoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Categories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Categories" source="categories" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Health and Wellnesses"
          source="healthandwellness.id"
          reference="HealthAndWellness"
        >
          <TextField source={HEALTHANDWELLNESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
