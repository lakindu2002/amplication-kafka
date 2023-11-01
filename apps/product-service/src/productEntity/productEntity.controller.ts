import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductEntityService } from "./productEntity.service";
import { ProductEntityControllerBase } from "./base/productEntity.controller.base";

@swagger.ApiTags("productEntities")
@common.Controller("productEntities")
export class ProductEntityController extends ProductEntityControllerBase {
  constructor(protected readonly service: ProductEntityService) {
    super(service);
  }
}
