import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductEntityServiceBase } from "./base/productEntity.service.base";

@Injectable()
export class ProductEntityService extends ProductEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
