import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { NewStudentDto } from "./student.dto";
import { StudentService } from "./student.service";

@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.readAll();
  }

  @Get("non-omnivores")
  getAllNonOmnivores() {
    return this.studentService.readAllNonOmnivores();
  }

  @Get(":id")
  getStudentById(@Param("id", ParseIntPipe) id: number) {
    return this.studentService.readOneById(id);
  }

  @Post()
  postNewStudent(@Body() newStudent: NewStudentDto) {
    return this.studentService.create(newStudent);
  }

  @Delete(":id")
  deleteStudent(@Param("id", ParseIntPipe) id: number) {
    return this.studentService.delete(id);
  }
}
