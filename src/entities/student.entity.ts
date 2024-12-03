import { DietaryPreference } from "src/student/student.dto";
import { Lesson } from "./lesson.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "first_name" })
  firstName: string;

  @Column({ name: "last_name" })
  lastName: string;

  @Column()
  age: number;

  @Column({
    name: "dietary_preference",
    type: "enum",
    enum: DietaryPreference,
  })
  dietaryPreference: DietaryPreference;

  @ManyToMany(() => Lesson, (lesson) => lesson.students)
  @JoinTable({
    name: "student_lesson",
    joinColumn: {
      name: "student_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "lesson_id",
      referencedColumnName: "id",
    },
  })
  lessons: Lesson[];
}
