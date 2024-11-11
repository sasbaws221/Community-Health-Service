import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { UserTitle } from "../user/UserTitle";

export const DiscussionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="comment" reference="Comment">
          <SelectArrayInput
            optionText={CommentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Content" multiline source="content" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "open", value: "Open" },
            { label: "closed", value: "Closed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
        <SelectInput
          source="topic"
          label="Topic"
          choices={[
            { label: "health", value: "Health" },
            { label: "events", value: "Events" },
            { label: "resources and advice", value: "ResourcesAndAdvice" },
            { label: "tips", value: "Tips" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
