import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { UserTitle } from "../user/UserTitle";

export const EducationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <SelectInput
          source="description"
          label="Description"
          choices={[
            { label: "mental health", value: "MentalHealth" },
            { label: "nutrition", value: "Nutrition" },
            { label: "fitness", value: "Fitness" },
            { label: "chronic condition", value: "ChronicCondition" },
            { label: "general health", value: "GeneralHealth" },
            { label: "self care", value: "SelfCare" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="difficultyLevel"
          label="Difficulty Level"
          choices={[
            { label: "beginner", value: "Beginner" },
            { label: "intermediate", value: "Intermediate" },
            { label: "advanced", value: "Advanced" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Duration" source="duration" />
        <TextInput label="Link" source="link" />
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
