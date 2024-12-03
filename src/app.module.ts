import { Module } from "@nestjs/common";
import { StudentModule } from "./student/student.module";
import { LessonModule } from "./lesson/lesson.module";
import { ChapterModule } from "./chapter/chapter.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Chapter } from "./entities/chapter.entity";
import { Student } from "./entities/student.entity";
import { Lesson } from "./entities/lesson.entity";

@Module({
  imports: [
    StudentModule,
    LessonModule,
    ChapterModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "z10mz10m",
      database: "temporary_db",
      entities: [Chapter, Student, Lesson],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
