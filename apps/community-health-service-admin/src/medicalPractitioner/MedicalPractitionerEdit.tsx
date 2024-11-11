import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const MedicalPractitionerEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
