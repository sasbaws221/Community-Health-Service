
import { registerEnumType } from "@nestjs/graphql";

export enum EnumContactStatus {
  New = "New",
  Read = "Read",
  Responded = "Responded",
}

registerEnumType(EnumContactStatus, {
  name: "EnumContactStatus",
});
