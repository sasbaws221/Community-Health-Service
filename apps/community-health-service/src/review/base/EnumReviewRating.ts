
import { registerEnumType } from "@nestjs/graphql";

export enum EnumReviewRating {
  One = "One",
  Two = "Two",
  Three = "Three",
  Four = "Four",
  Five = "Five",
}

registerEnumType(EnumReviewRating, {
  name: "EnumReviewRating",
});
