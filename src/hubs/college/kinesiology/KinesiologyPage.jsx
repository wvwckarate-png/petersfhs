import React from "react";
import CourseHubTemplate from "../CourseHubTemplate";
import { KIN_CONTENT } from "./content";

export default function KinesiologyPage({ course }) {
  return <CourseHubTemplate course={course} content={KIN_CONTENT} />;
}
