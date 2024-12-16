import { Injectable } from "@nestjs/common";
import { DietaryPreference, NewStudentDto } from "./student.dto";
import { EntityManager, Not } from "typeorm";
import { Student } from "src/entities/student.entity";

@Injectable()
export class StudentService {
  constructor(private readonly entityManager: EntityManager) {}

  readAll() {
    return this.entityManager.find(Student);
  }

  readAllNonOmnivores() {
    return this.entityManager.find(Student, {
      where: {
        dietaryPreference: Not(DietaryPreference.OMNIVORE),
      },
    });
  }

  readOneById(id: number) {
    return this.entityManager.findOne(Student, { where: { id } });
  }

  async create(student: NewStudentDto) {
    const result = await this.entityManager.save(Student, {
      firstName: student.firstName,
      lastName: student.lastName,
      age: student.age,
      dietaryPreference:
        student.dietaryPreference ?? DietaryPreference.OMNIVORE,
    });

    return { id: result.id };
  }

  async delete(id: number) {
    await this.entityManager.delete(Student, { id });
  }
}
