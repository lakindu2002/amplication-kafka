import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderServiceBase } from "./base/order.service.base";
import { Prisma, Order } from "@prisma/client";
import { KafkaProducerService } from "src/kafka/kafka.producer.service";
import { MyMessageBrokerTopics } from "src/kafka/topics";

@Injectable()
export class OrderService extends OrderServiceBase {
  constructor(protected readonly prisma: PrismaService, protected readonly kafkaProducer: KafkaProducerService) {
    super(prisma);
  }

  async create<T extends Prisma.OrderCreateArgs>(args: Prisma.SelectSubset<T, Prisma.OrderCreateArgs>): Promise<Order> {
    const order = await super.create(args);

    await this.kafkaProducer.emitMessage(MyMessageBrokerTopics.OrderStatus, {
      key: null,
      value: {
        id: order.id,
        price: order.totalPrice,
        status: 'CREATED'
      }
    });

    console.log('Message pushed to Topic')

    return order;
  }
}
