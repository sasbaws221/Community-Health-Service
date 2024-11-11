import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "name";

export const ContactTitle = (record: TContact): string => {
  return record.name?.toString() || String(record.id);
};
