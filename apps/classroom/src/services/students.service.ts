import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async listAllStudents() {
    return await this.prisma.student.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
