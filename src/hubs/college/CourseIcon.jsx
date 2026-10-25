import React from "react";

// Course-specific icons for the College Hub. `color` is the main stroke, `accent` the highlight.
export default function CourseIcon({ id, color = "#002855", accent = "#EAAA00", size = 24 }) {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none" };
  const stroke = { stroke: color, strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

  if (id === "elementary-physiology") {
    // heart with a pulse line
    return (
      <svg {...c}>
        <path d="M12 20C12 20 4 14.8 4 9.5C4 7 5.9 5.2 8.2 5.2C9.7 5.2 11.1 6 12 7.3C12.9 6 14.3 5.2 15.8 5.2C18.1 5.2 20 7 20 9.5C20 14.8 12 20 12 20Z" {...stroke} />
        <path d="M2.5 12.5H8L9.8 9.5L12.4 15L14.2 12.5H21.5" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (id === "kinesiology") {
    // runner in motion
    return (
      <svg {...c}>
        <circle cx="15.5" cy="4.6" r="1.9" {...stroke} />
        <path d="M14.2 8L11.6 13.2" {...stroke} />
        <path d="M14 8.6L18.4 11.2" {...stroke} />
        <path d="M13.8 8.6L9.6 10" {...stroke} />
        <path d="M11.6 13.2L15.2 16.4L13.8 20.6" {...stroke} />
        <path d="M11.6 13.2L8 15.8L5.4 15.2" {...stroke} />
        <path d="M2.5 19.5H8" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3.5 17.3H6" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "anatomy") {
    // long bone
    return (
      <svg {...c}>
        <path d="M7.2 3.8C5.6 3.3 4.2 4.6 4.6 6C3.4 6.4 3 8 4 8.9C4.6 9.4 5.4 9.5 6.1 9.2L14.8 17.9C14.5 18.6 14.6 19.4 15.1 20C16 21 17.6 20.6 18 19.4C19.4 19.8 20.7 18.4 20.2 17C21 16.4 21.1 15.1 20.2 14.2C19.6 13.6 18.8 13.5 18.1 13.8L9.4 5.1C9.7 4.4 9.6 3.6 9.1 3.1C8.6 2.6 7.9 3.6 7.2 3.8Z" {...stroke} />
        <path d="M10.2 13.8L12.4 11.6" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "medical-terminology") {
    // page with medical cross and text lines
    return (
      <svg {...c}>
        <rect x="5" y="3.5" width="14" height="17" rx="2.2" {...stroke} />
        <path d="M12 6.4V11.2M9.6 8.8H14.4" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        <path d="M8.5 14.5H15.5M8.5 17.5H13" {...stroke} strokeWidth="1.5" />
      </svg>
    );
  }
  if (id === "exercise-nutrition") {
    // apple
    return (
      <svg {...c}>
        <path d="M12 8.2C10.5 7 7 7 5.7 10C4.4 13 6 19 8.5 20C10 20.5 11 19.8 12 19.8C13 19.8 14 20.5 15.5 20C18 19 19.6 13 18.3 10C17 7 13.5 7 12 8.2Z" {...stroke} />
        <path d="M12 8.2C12 6.5 12.8 5 14.5 4" {...stroke} />
        <path d="M12.8 5.9C13.6 4.9 15 4.6 16.2 5.2C15.6 6.3 14.2 6.6 12.8 5.9Z" stroke={accent} strokeWidth="1.5" strokeLinejoin="round" fill={accent} fillOpacity="0.35" />
      </svg>
    );
  }
  if (id === "organic-chemistry-1" || id === "organic-chemistry-2") {
    // benzene ring with the course number in the upper right
    const n = id.endsWith("2") ? "2" : "1";
    return (
      <svg {...c}>
        <path d="M10.2 7.4L15.8 10.6V17L10.2 20.2L4.6 17V10.6L10.2 7.4Z" {...stroke} />
        <path d="M10.2 10.1L13.5 12V15.6L10.2 17.5L6.9 15.6V12L10.2 10.1Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" opacity="0.45" />
        <circle cx="17.8" cy="6.2" r="5.2" fill={accent} />
        <text x="17.8" y="9" textAnchor="middle" fontSize="8.4" fontWeight="800" fontFamily="'Manrope', 'Nunito', sans-serif" fill={color}>{n}</text>
      </svg>
    );
  }
  // Foundation courses (these open the AP Hub subjects)
  if (id === "biology") {
    return (
      <svg {...c}>
        <path d="M19 5C19 5 19.5 13 13.5 18C8.5 22 4 19.5 4 19.5C4 19.5 3 13.5 8 9C12.5 5 19 5 19 5Z" {...stroke} />
        <path d="M18 6L9.5 15.5" stroke={accent} strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "chemistry") {
    return (
      <svg {...c}>
        <path d="M9 3H15" {...stroke} />
        <path d="M10 3.5V9.5L4.8 18.2C4.2 19.3 5 20.5 6.2 20.5H17.8C19 20.5 19.8 19.3 19.2 18.2L14 9.5V3.5" {...stroke} />
        <path d="M7 15.5C8.5 14.3 10 16.5 12 15.5C14 14.5 15.5 16.3 17 15.5" stroke={accent} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (id === "physics1" || id === "physics2") {
    const n = id.endsWith("2") ? "2" : "1";
    return (
      <svg {...c}>
        <path d="M3 21V3" {...stroke} />
        <path d="M3 21H21" {...stroke} />
        <path d="M3.5 17C7 17 8 8 13 8C17 8 16.5 14 20.5 14" stroke={accent} strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="17.8" cy="6.2" r="5.2" fill={accent} />
        <text x="17.8" y="9" textAnchor="middle" fontSize="8.4" fontWeight="800" fontFamily="'Manrope', 'Nunito', sans-serif" fill={color}>{n}</text>
      </svg>
    );
  }
  // Fallback: open book
  return (
    <svg {...c}>
      <path d="M12 6.5C12 6.5 9.2 4.5 4 4.5V17.5C9.2 17.5 12 19.5 12 19.5C12 19.5 14.8 17.5 20 17.5V4.5C14.8 4.5 12 6.5 12 6.5Z" {...stroke} />
      <path d="M12 6.5V19.5" {...stroke} />
    </svg>
  );
}
