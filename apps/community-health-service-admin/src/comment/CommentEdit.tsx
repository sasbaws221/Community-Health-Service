import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DiscussionTitle } from "../discussion/DiscussionTitle";
import { HealthAndWellnessTitle } from "../healthAndWellness/HealthAndWellnessTitle";
import { LocalEventTitle } from "../localEvent/LocalEventTitle";
import { ResourcesAndAdviceTitle } from "../resourcesAndAdvice/ResourcesAndAdviceTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Comments" multiline source="comments" />
        <ReferenceInput
          source="discussions.id"
          reference="Discussion"
          label="Discussions"
        >
          <SelectInput optionText={DiscussionTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="healthAndWellnesses.id"
          reference="HealthAndWellness"
          label="Health and Wellnesses"
        >
          <SelectInput optionText={HealthAndWellnessTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="localEvents.id"
          reference="LocalEvent"
          label="Local Events"
        >
          <SelectInput optionText={LocalEventTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="resourcesAndAdvices.id"
          reference="ResourcesAndAdvice"
          label="Resources and advices"
        >
          <SelectInput optionText={ResourcesAndAdviceTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
