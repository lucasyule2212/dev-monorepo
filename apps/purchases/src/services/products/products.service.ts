import { Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from 'src/database/prisma/prisma.service';

interface CreateProductParams {
  title: string;
}

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProductById(id: string) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async listAllProducts() {
    return await this.prisma.product.findMany();
  }

  async createProduct({ title }: CreateProductParams) {
    const slug = slugify(title, {
      lower: true,
    });

    const slugAlreadyExists = await this.prisma.product.findUnique({
      where: { slug },
    });

    if (slugAlreadyExists) {
      throw new Error('Another product with same Slug already exists');
    }

    return await this.prisma.product.create({
      data: {
        title,
        slug,
      },
    });
  }
}
