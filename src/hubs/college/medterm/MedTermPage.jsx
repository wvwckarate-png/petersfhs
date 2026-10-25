import React from "react";
import CourseHubTemplate from "../CourseHubTemplate";
import { MEDTERM_CONTENT } from "./content";

export default function MedTermPage({ course }) {
  return <CourseHubTemplate course={course} content={MEDTERM_CONTENT} />;
}
