// Course content registry for the College Hub.
//
// A course with no entry here shows its "coming soon" placeholder page.
// To add a course, create its content file and register it by course id, e.g.:
//
//   import { lazy } from "react";
//   export const COURSE_PAGES = {
//     kinesiology: lazy(() => import("./kinesiology/KinesiologyPage")),
//   };
//
// Each course page should use the same shared pieces as the AP subjects
// (useSectionProgress, ExamEngine, RichText) so progress and practice look and work the same.
export const COURSE_PAGES = {};
