import { applyDecorators } from "@nestjs/common";
import { IsInt, Min } from "class-validator";

const IsId = () => applyDecorators(IsInt(), Min(1));

export class StudentLessonDto {
  @IsId()
  studentId: number;

  @IsId()
  lessonId: number;
}
