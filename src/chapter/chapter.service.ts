import { Injectable } from "@nestjs/common";
import { NewChapterWithLessonsDto } from "./chapter.dto";

@Injectable()
export class ChapterService {
  createWithLessons(newChapterWithLessons: NewChapterWithLessonsDto) {
    throw new Error("TODO");
  }

  delete(id: number) {
    throw new Error("TODO");
  }
}
