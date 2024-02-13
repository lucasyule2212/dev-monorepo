import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'node:path';
import { DatabaseModule } from 'src/database/database.module';
import { ProductsService } from 'src/services/products/products.service';
import { PurchasesService } from 'src/services/purchases/purchases.service';
import { ProductsResolverResolver } from './graphql/resolvers/products/products.resolver';
import { PurchasesResolver } from './graphql/resolvers/purchases/purchases.resolver';
import { CustomersService } from 'src/services/customers.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolverResolver,
    ProductsService,
    PurchasesResolver,
    PurchasesService,
    CustomersService,
  ],
})
export class HttpModule {}
