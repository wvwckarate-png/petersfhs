import React from "react";
import CourseHubTemplate from "../CourseHubTemplate";
import { ORGO1_CONTENT } from "./content";

export default function OrgChem1Page({ course }) {
  return <CourseHubTemplate course={course} content={ORGO1_CONTENT} />;
}
