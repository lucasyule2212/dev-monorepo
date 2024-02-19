import {
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import { AuthUser, CurrentUser } from 'src/http/authorization/current-user';
import { CustomersService } from 'src/services/customers.service';
import { PurchasesService } from 'src/services/purchases/purchases.service';
import { Customer } from '../../models/customer';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(
    private customersService: CustomersService,
    private purchasesService: PurchasesService,
  ) {}

  @Query(() => Customer)
  // * This is a public endpoint
  me(@CurrentUser() user: AuthUser) {
    return this.customersService.getCustomerByAuthUserId(user.sub);
  }

  @ResolveField()
  purchases(@Parent() customer: Customer) {
    return this.purchasesService.listAllPurchasesFromCustomer(customer.id);
  }

  @ResolveReference()
  resolveReference(reference: { authUserId: string }) {
    return this.customersService.getCustomerByAuthUserId(reference.authUserId);
  }
}
