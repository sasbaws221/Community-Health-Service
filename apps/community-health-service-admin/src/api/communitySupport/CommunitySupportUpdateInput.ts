import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunitySupportUpdateInput = {
  isAdmin?: boolean | null;
  messageContent?: string | null;
  sender?: UserWhereUniqueInput | null;
  status?: "Sent" | "Received" | "Read" | null;
};
