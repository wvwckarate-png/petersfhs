import React from "react";
import CourseHubTemplate from "../CourseHubTemplate";
import { ANAT_CONTENT } from "./content";

export default function AnatomyPage({ course }) {
  return <CourseHubTemplate course={course} content={ANAT_CONTENT} />;
}
