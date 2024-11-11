import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const MedicalPractitionerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bio" source="bio" />
        <TextInput label="Contact" source="contact" />
        <TextInput label="License Number" source="licenseNumber" />
        <TextInput label="Specialization" source="specialization" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Years Of Experience" source="yearsOfExperience" />
      </SimpleForm>
    </Create>
  );
};
