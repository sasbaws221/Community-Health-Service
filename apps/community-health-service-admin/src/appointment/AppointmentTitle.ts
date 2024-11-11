import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "name";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.name?.toString() || String(record.id);
};
