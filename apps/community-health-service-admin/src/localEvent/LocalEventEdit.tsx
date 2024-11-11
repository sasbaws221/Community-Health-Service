import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { UserTitle } from "../user/UserTitle";

export const LocalEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="category"
          label="Category"
          choices={[
            { label: "workshop", value: "Workshop" },
            { label: "support group", value: "SupportGroup" },
            { label: "health screening", value: "HealthScreening" },
            { label: "seminar", value: "Seminar" },
            { label: "exercise class", value: "ExerciseClass" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput source="comment" reference="Comment">
          <SelectArrayInput
            optionText={CommentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Contact" source="contact" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="Event Date" source="eventDate" />
        <TextInput label="Location" source="location" />
        <TextInput label="Title" source="title" />
        <ReferenceArrayInput source="user" reference="User">
          <SelectArrayInput
            optionText={UserTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
