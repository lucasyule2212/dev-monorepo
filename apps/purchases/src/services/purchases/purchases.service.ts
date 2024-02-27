import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { KafkaService } from 'src/messaging/kafka.service';

interface CreatePurchaseParams {
  productId: string;
  customerId: string;
}

@Injectable()
export class PurchasesService {
  constructor(
    private prisma: PrismaService,
    private kafka: KafkaService,
  ) {}

  async listAllPurchases() {
    return await this.prisma.purchase.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async listAllPurchasesFromCustomer(customerId: string) {
    return await this.prisma.purchase.findMany({
      where: {
        customerId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createPurchase({ productId, customerId }: CreatePurchaseParams) {
    const productExists = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!productExists) {
      throw new Error('Product not found');
    }

    const customerExists = await this.prisma.customer.findUnique({
      where: { id: customerId },
    });

    if (!customerExists) {
      throw new Error('Customer not found');
    }

    const purchaseExists = await this.prisma.purchase.findFirst({
      where: {
        productId,
        customerId,
      },
    });

    if (purchaseExists) {
      throw new Error('User already purchased this product');
    }

    const purchase = await this.prisma.purchase.create({
      data: {
        productId,
        customerId,
      },
    });

    this.kafka.emit('purchases.new-purchase', {
      customer: {
        authUserId: customerExists.authUserId,
      },
      product: {
        id: productExists.id,
        title: productExists.title,
        slug: productExists.slug,
      },
    });

    return purchase;
  }
}
