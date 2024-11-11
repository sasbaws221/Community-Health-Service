
import { ResourcesAndAdvice } from "../../resourcesAndAdvice/base/ResourcesAndAdvice";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumDiscussionTopic {
  Health = "Health",
  Events = "Events",
  ResourcesAndAdvice = "ResourcesAndAdvice",
  Tips = "Tips",
}

registerEnumType(EnumDiscussionTopic, {
  name: "EnumDiscussionTopic",
});
