import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CoursesService } from 'src/services/courses.service';
import { EnrollmentsService } from 'src/services/enrollments.service';
import { StudentsService } from 'src/services/students.service';

interface PurchaseCreatedPayload {
  customer: {
    authUserId: string;
  };
  product: {
    id: string;
    title: string;
    slug: string;
  };
}

@Controller()
export class PurchasesController {
  constructor(
    private studentsService: StudentsService,
    private coursesService: CoursesService,
    private enrollmentsService: EnrollmentsService,
  ) {}

  @EventPattern('purchases.new-purchase')
  async purchaseCreated(@Payload() value: PurchaseCreatedPayload) {
    let student = await this.studentsService.getStudentByAuthUserId(
      value.customer.authUserId,
    );

    if (!student) {
      student = await this.studentsService.createStudent({
        authUserId: value.customer.authUserId,
      });
    }

    let course = await this.coursesService.getCourseBySlug(value.product.slug);

    if (!course) {
      course = await this.coursesService.createCourse({
        title: value.product.title,
        slug: value.product.slug,
      });
    }

    await this.enrollmentsService.createEnrollment({
      studentId: student.id,
      courseId: course.id,
    });
  }
}
