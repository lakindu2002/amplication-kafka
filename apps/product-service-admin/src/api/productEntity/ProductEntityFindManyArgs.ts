import { ProductEntityWhereInput } from "./ProductEntityWhereInput";
import { ProductEntityOrderByInput } from "./ProductEntityOrderByInput";

export type ProductEntityFindManyArgs = {
  where?: ProductEntityWhereInput;
  orderBy?: Array<ProductEntityOrderByInput>;
  skip?: number;
  take?: number;
};
