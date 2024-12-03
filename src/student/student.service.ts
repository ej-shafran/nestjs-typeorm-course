import { Injectable } from "@nestjs/common";
import { NewStudentDto } from "./student.dto";

@Injectable()
export class StudentService {
  readAll() {
    throw new Error("TODO");
  }

  readAllNonOmnivores() {
    throw new Error("TODO");
  }

  readOneById(id: number) {
    throw new Error("TODO");
  }

  create(student: NewStudentDto) {
    throw new Error("TODO");
  }

  delete(id: number) {
    throw new Error("TODO");
  }
}
