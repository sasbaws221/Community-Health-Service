import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { EducationTitle } from "../education/EducationTitle";
import { HealthAndWellnessTitle } from "../healthAndWellness/HealthAndWellnessTitle";
import { ResourcesAndAdviceTitle } from "../resourcesAndAdvice/ResourcesAndAdviceTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="categories"
          label="Categories"
          choices={[
            { label: "mental health", value: "MentalHealth" },
            { label: "fitness", value: "Fitness" },
            { label: "nutrition", value: "Nutrition" },
            { label: "general health", value: "GeneralHealth" },
            { label: "chronic condition", value: "ChronicCondition" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput source="educations" reference="Education">
          <SelectArrayInput
            optionText={EducationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="healthAndWellnesses.id"
          reference="HealthAndWellness"
          label="Health and Wellnesses"
        >
          <SelectInput optionText={HealthAndWellnessTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="resourcesAndAdvices"
          reference="ResourcesAndAdvice"
        >
          <SelectArrayInput
            optionText={ResourcesAndAdviceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
