import { Injectable } from "@nestjs/common";
import { NewChapterWithLessonsDto } from "./chapter.dto";
import { EntityManager } from "typeorm";
import { Chapter } from "src/entities/chapter.entity";

@Injectable()
export class ChapterService {
  constructor(private readonly entityManager: EntityManager) {}

  async createWithLessons(newChapterWithLessons: NewChapterWithLessonsDto) {
    const chapter = this.entityManager.create(Chapter, {
      title: newChapterWithLessons.title,
      description: newChapterWithLessons.description,
      lessons: newChapterWithLessons.lessons,
    });
    const result = await this.entityManager.save(Chapter, chapter);
    return {
      id: result.id,
      lessonIds: result.lessons.map((lesson) => lesson.id),
    };
  }

  async delete(id: number) {
    await this.entityManager.delete(Chapter, { id });
  }
}
