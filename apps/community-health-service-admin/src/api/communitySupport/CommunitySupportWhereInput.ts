import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunitySupportWhereInput = {
  id?: StringFilter;
  isAdmin?: BooleanNullableFilter;
  messageContent?: StringNullableFilter;
  sender?: UserWhereUniqueInput;
  status?: "Sent" | "Received" | "Read";
};
