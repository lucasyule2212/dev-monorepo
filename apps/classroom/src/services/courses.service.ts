import { Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from 'src/database/prisma/prisma.service';

export interface CreateCourseParams {
  title: string;
  slug?: string;
}

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async listAllCourses() {
    return await this.prisma.course.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getCourseById(courseId: string) {
    return await this.prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });
  }

  async getCourseBySlug(slug: string) {
    return await this.prisma.course.findUnique({
      where: {
        slug,
      },
    });
  }

  async createCourse({
    title,
    slug = slugify(title, { lower: true }),
  }: CreateCourseParams) {
    const courseAlreadyExists = await this.prisma.course.findUnique({
      where: { slug },
    });

    if (courseAlreadyExists) {
      throw new Error('Course already exists');
    }

    return await this.prisma.course.create({
      data: {
        title,
        slug,
      },
    });
  }
}
