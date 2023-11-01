import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductEntityWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
