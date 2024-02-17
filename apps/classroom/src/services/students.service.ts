import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

interface CreateStudentParams {
  authUserId: string;
}

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

  async getStudentByAuthUserId(authUserId: string) {
    return await this.prisma.student.findFirst({
      where: {
        authUserId,
      },
    });
  }

  async getStudentById(studentId: string) {
    return await this.prisma.student.findUnique({
      where: {
        id: studentId,
      },
    });
  }

  async createStudent({ authUserId }: CreateStudentParams) {
    return await this.prisma.student.create({
      data: {
        authUserId,
      },
    });
  }
}
