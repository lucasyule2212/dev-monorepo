import { Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from 'src/services/products/products.service';
import { Product } from '../../models/product';

@Resolver()
export class ProductsResolverResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  // * This is a public endpoint
  // @UseGuards(AuthorizationGuard)
  products() {
    return this.productsService.listAllProducts();
  }
}
