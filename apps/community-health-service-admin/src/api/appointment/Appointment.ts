export type Appointment = {
  contact: number | null;
  createdAt: Date;
  email: string | null;
  id: string;
  location: string | null;
  message: string | null;
  name: string | null;
  status?: "Scheduled" | "Completed" | "Cancelled" | "Rescheduled" | null;
  updatedAt: Date;
};
