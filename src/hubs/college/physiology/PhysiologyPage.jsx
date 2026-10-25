import React from "react";
import CourseHubTemplate from "../CourseHubTemplate";
import { PSIO_CONTENT } from "./content";

export default function PhysiologyPage({ course }) {
  return <CourseHubTemplate course={course} content={PSIO_CONTENT} />;
}
