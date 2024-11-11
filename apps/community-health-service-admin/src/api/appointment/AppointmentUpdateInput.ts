export type AppointmentUpdateInput = {
  contact?: number | null;
  email?: string | null;
  location?: string | null;
  message?: string | null;
  name?: string | null;
  status?: "Scheduled" | "Completed" | "Cancelled" | "Rescheduled" | null;
};
