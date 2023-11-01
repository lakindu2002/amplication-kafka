import { Module } from "@nestjs/common";
import { ProductEntityModuleBase } from "./base/productEntity.module.base";
import { ProductEntityService } from "./productEntity.service";
import { ProductEntityController } from "./productEntity.controller";
import { ProductEntityResolver } from "./productEntity.resolver";

@Module({
  imports: [ProductEntityModuleBase],
  controllers: [ProductEntityController],
  providers: [ProductEntityService, ProductEntityResolver],
  exports: [ProductEntityService],
})
export class ProductEntityModule {}
