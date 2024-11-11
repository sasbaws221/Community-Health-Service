export type AppointmentCreateInput = {
  contact?: number | null;
  email?: string | null;
  location?: string | null;
  message?: string | null;
  name?: string | null;
  status?: "Scheduled" | "Completed" | "Cancelled" | "Rescheduled" | null;
};
