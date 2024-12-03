import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from "@nestjs/common";
import { StudentLessonDto } from "./lesson.dto";
import { LessonService } from "./lesson.service";

@Controller("lesson")
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get("count/:chapterId")
  getCountOfLessonsInChapter(
    @Param("chapterId", ParseIntPipe) chapterId: number,
  ) {
    return this.lessonService.readCountByChapterId(chapterId);
  }

  @Get(":studentId")
  getAllLessonsForStudent(@Param("studentId", ParseIntPipe) studentId: number) {
    return this.lessonService.readAllByStudentId(studentId);
  }

  @Delete(":id")
  deleteLesson(@Param("id", ParseIntPipe) id: number) {
    return this.lessonService.delete(id);
  }

  @Put("add-student")
  addStudentToLesson(@Body() { studentId, lessonId }: StudentLessonDto) {
    return this.lessonService.updateAddStudentToLesson(studentId, lessonId);
  }

  @Put("remove-student")
  removeStudentFromLesson(@Body() { studentId, lessonId }: StudentLessonDto) {
    return this.lessonService.updateRemoveStudentFromLesson(
      studentId,
      lessonId,
    );
  }
}
