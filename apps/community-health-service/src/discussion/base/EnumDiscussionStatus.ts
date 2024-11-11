
import { registerEnumType } from "@nestjs/graphql";

export enum EnumDiscussionStatus {
  Open = "Open",
  Closed = "Closed",
}

registerEnumType(EnumDiscussionStatus, {
  name: "EnumDiscussionStatus",
});
