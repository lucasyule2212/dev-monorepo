import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

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
}
