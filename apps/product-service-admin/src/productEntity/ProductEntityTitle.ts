import { ProductEntity as TProductEntity } from "../api/productEntity/ProductEntity";

export const PRODUCTENTITY_TITLE_FIELD = "name";

export const ProductEntityTitle = (record: TProductEntity): string => {
  return record.name?.toString() || String(record.id);
};
