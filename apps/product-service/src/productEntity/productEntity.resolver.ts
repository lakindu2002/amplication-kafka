import * as graphql from "@nestjs/graphql";
import { ProductEntityResolverBase } from "./base/productEntity.resolver.base";
import { ProductEntity } from "./base/ProductEntity";
import { ProductEntityService } from "./productEntity.service";

@graphql.Resolver(() => ProductEntity)
export class ProductEntityResolver extends ProductEntityResolverBase {
  constructor(protected readonly service: ProductEntityService) {
    super(service);
  }
}
