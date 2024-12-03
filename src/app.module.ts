import { Module } from "@nestjs/common";
import { StudentModule } from "./student/student.module";
import { LessonModule } from "./lesson/lesson.module";
import { ChapterModule } from "./chapter/chapter.module";

@Module({
  imports: [StudentModule, LessonModule, ChapterModule],
})
export class AppModule {}
