import { User } from "../user/User";

export type CommunitySupport = {
  createdAt: Date;
  id: string;
  isAdmin: boolean | null;
  messageContent: string | null;
  sender?: User | null;
  status?: "Sent" | "Received" | "Read" | null;
  updatedAt: Date;
};
