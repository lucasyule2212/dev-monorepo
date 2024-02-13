import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from 'src/services/products/products.service';
import { CreateProductInput } from '../../inputs/create-product-input';
import { Product } from '../../models/product';

@Resolver(() => Product)
export class ProductsResolverResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  // * This is a public endpoint
  // @UseGuards(AuthorizationGuard)
  products() {
    return this.productsService.listAllProducts();
  }

  @Mutation(() => Product)
  // * This is a protected endpoint
  // @UseGuards(AuthorizationGuard)
  createProduct(@Args('data') data: CreateProductInput) {
    const { title } = data;
    return this.productsService.createProduct({ title });
  }
}
