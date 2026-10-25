import React from "react";
import CourseHubTemplate from "../CourseHubTemplate";
import { NUTR_CONTENT } from "./content";

export default function NutritionPage({ course }) {
  return <CourseHubTemplate course={course} content={NUTR_CONTENT} />;
}
