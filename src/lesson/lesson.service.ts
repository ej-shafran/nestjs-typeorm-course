import { Injectable } from "@nestjs/common";
import { Lesson } from "src/entities/lesson.entity";
import { EntityManager } from "typeorm";

@Injectable()
export class LessonService {
  constructor(private readonly entityManager: EntityManager) {}

  async readCountByChapterId(chapterId: number) {
    const count = await this.entityManager.count(Lesson, {
      where: {
        chapter: { id: chapterId },
      },
    });

    return { count };
  }

  readAllByStudentId(studentId: number) {
    return this.entityManager.find(Lesson, {
      where: { students: { id: studentId } },
    });
  }

  delete(id: number) {
    return this.entityManager.delete(Lesson, { id });
  }

  async updateAddStudentToLesson(studentId: number, lessonId: number) {
    await this.entityManager
      .createQueryBuilder()
      .relation(Lesson, "students")
      .of({ id: lessonId })
      .add({ id: studentId });
  }

  async updateRemoveStudentFromLesson(studentId: number, lessonId: number) {
    await this.entityManager
      .createQueryBuilder()
      .relation(Lesson, "students")
      .of({ id: lessonId })
      .remove({ id: studentId });
  }
}
