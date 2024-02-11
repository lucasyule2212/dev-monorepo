import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorizationGuard } from 'src/http/authorization/authorization.guard';
import { Product } from '../../models/product';

@Resolver()
export class ProductsResolverResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Product])
  @UseGuards(AuthorizationGuard)
  products() {
    return this.prisma.product.findMany();
  }
}
