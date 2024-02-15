import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface PurchaseCreatedPayload {
  customer: {
    authUserId: string;
  };
  product: {
    id: string;
    title: string;
    slug: string;
  };
}

@Controller()
export class PurchasesController {
  @EventPattern('purchases.new-purchase')
  async purchaseCreated(@Payload() value: PurchaseCreatedPayload) {
    console.log(value);
  }
}
