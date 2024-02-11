import { Test, TestingModule } from '@nestjs/testing';
import { ProductsResolverResolver } from './products.resolver.resolver';

describe('ProductsResolverResolver', () => {
  let resolver: ProductsResolverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsResolverResolver],
    }).compile();

    resolver = module.get<ProductsResolverResolver>(ProductsResolverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
