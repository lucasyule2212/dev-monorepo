import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/http/authorization/authorization.guard';
import { AuthUser, CurrentUser } from 'src/http/authorization/current-user';
import { CustomersService } from 'src/services/customers.service';
import { ProductsService } from 'src/services/products/products.service';
import { PurchasesService } from 'src/services/purchases/purchases.service';
import { CreatePurchaseInput } from '../../inputs/create-purchase-input';
import { Purchase } from '../../models/purchase';

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(
    private purchasesService: PurchasesService,
    private productService: ProductsService,
    private customerService: CustomersService,
  ) {}

  @Query(() => [Purchase])
  // * This is a private endpoint
  @UseGuards(AuthorizationGuard)
  purchases() {
    return this.purchasesService.listAllPurchases();
  }

  @Mutation(() => Purchase)
  // * This is a protected endpoint
  @UseGuards(AuthorizationGuard)
  async createPurchase(
    @CurrentUser() user: AuthUser,
    @Args('data') data: CreatePurchaseInput,
  ) {
    const { productId } = data;

    let customer = await this.customerService.getCustomerByAuthUserId(user.sub);

    if (!customer) {
      customer = await this.customerService.createCustomer({
        authUserId: user.sub,
      });
    }

    return this.purchasesService.createPurchase({
      productId,
      customerId: customer.id,
    });
  }

  @ResolveField()
  product(@Parent() purchase: Purchase) {
    return this.productService.getProductById(purchase.productId);
  }
}
