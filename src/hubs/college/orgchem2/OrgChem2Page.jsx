import React from "react";
import CourseHubTemplate from "../CourseHubTemplate";
import { ORGO2_CONTENT } from "./content";

export default function OrgChem2Page({ course }) {
  return <CourseHubTemplate course={course} content={ORGO2_CONTENT} />;
}
