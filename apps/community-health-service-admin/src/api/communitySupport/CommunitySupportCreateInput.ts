import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunitySupportCreateInput = {
  isAdmin?: boolean | null;
  messageContent?: string | null;
  sender?: UserWhereUniqueInput | null;
  status?: "Sent" | "Received" | "Read" | null;
};
