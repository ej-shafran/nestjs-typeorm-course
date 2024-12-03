import { IsEnum, IsInt, IsOptional, IsString, Min } from "class-validator";

export enum DietaryPreference {
  VEGAN = "vegan",
  VEGETARIAN = "vegetarian",
  OMNIVORE = "omnivore",
}

export class NewStudentDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsInt()
  @Min(10)
  age: number;

  // NOTE: defaults to `OMNIVORE`
  @IsOptional()
  @IsEnum(DietaryPreference)
  dietaryPreference?: DietaryPreference;
}
