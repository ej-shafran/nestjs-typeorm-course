import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Chapter } from "./chapter.entity";
import { Student } from "./student.entity";

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.lessons)
  @JoinColumn({ name: "chapter_id" })
  chapter: Chapter;

  @ManyToMany(() => Student, (student) => student.lessons)
  students: Student[];
}
