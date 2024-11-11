
import { Medication } from "../../medication/base/Medication";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumReviewProductType {
  Doctor = "Doctor",
  Services = "Services",
  Medication = "Medication",
}

registerEnumType(EnumReviewProductType, {
  name: "EnumReviewProductType",
});
