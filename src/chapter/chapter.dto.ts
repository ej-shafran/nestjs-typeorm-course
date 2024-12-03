import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class NewLessonDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class NewChapterWithLessonsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @Type(() => NewLessonDto)
  @ValidateNested({ each: true })
  lessons: NewLessonDto[];
}
