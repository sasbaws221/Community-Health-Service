export type Contact = {
  contact: number | null;
  createdAt: Date;
  email: string | null;
  id: string;
  message: string | null;
  name: string | null;
  status?: "New" | "Read" | "Responded" | null;
  subject: string | null;
  updatedAt: Date;
};
