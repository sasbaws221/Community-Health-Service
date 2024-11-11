export type ContactUpdateInput = {
  contact?: number | null;
  email?: string | null;
  message?: string | null;
  name?: string | null;
  status?: "New" | "Read" | "Responded" | null;
  subject?: string | null;
};
