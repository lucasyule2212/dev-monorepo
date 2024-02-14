import { Query, Resolver } from '@nestjs/graphql';
import { Course } from '../models/course';
import { CoursesService } from 'src/services/courses.service';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from 'src/http/authorization/authorization.guard';

@Resolver(() => Course)
export class CoursesResolver {
  constructor(private coursesService: CoursesService) {}

  @Query(() => [Course])
  @UseGuards(AuthorizationGuard)
  courses() {
    return this.coursesService.listAllCourses();
  }
}
