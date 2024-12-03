import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { NewChapterWithLessonsDto } from "./chapter.dto";
import { ChapterService } from "./chapter.service";

@Controller("chapter")
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Post()
  postNewChapterWithLessons(
    @Body() newChapterWithLessons: NewChapterWithLessonsDto,
  ) {
    return this.chapterService.createWithLessons(newChapterWithLessons);
  }

  @Delete(":id")
  deleteChapter(@Param("id", ParseIntPipe) id: number) {
    return this.chapterService.delete(id);
  }
}
