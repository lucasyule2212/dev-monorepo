import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

interface CreatePurchaseParams {
  productId: string;
  customerId: string;
}

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

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

    return await this.prisma.purchase.create({
      data: {
        productId,
        customerId,
      },
    });
  }
}
