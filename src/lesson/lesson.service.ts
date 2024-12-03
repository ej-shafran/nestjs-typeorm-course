import { Injectable } from "@nestjs/common";

@Injectable()
export class LessonService {
  readCountByChapterId(chapterId: number) {
    throw new Error("TODO");
  }

  readAllByStudentId(studentId: number) {
    throw new Error("TODO");
  }

  delete(id: number) {
    throw new Error("TODO");
  }

  updateAddStudentToLesson(studentId: number, lessonId: number) {
    throw new Error("TODO");
  }

  updateRemoveStudentFromLesson(studentId: number, lessonId: number) {
    throw new Error("TODO");
  }
}
