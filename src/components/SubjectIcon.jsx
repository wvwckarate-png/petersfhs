import React from "react";

// Accent color for each AP subject (the same ones the subject pages use).
export const SUBJECT_COLORS = {
  physics1: "#7BA3B8", physics2: "#7C9B72", biology: "#9887B0", chemistry: "#D98B7B", environmental: "#6B8F5E",
  ushistory: "#A8434B", government: "#5B6FA8", englang: "#C9992E", englit: "#3E5C8A",
};

// Darker shade of each accent, for text and buttons on white.
export const SUBJECT_DEEP = {
  physics1: "#4F7A8F", physics2: "#5E7A55", biology: "#6B5A80", chemistry: "#A85F4F", environmental: "#4A6B3F",
  ushistory: "#7A2E34", government: "#44558A", englang: "#966F1E", englit: "#2E4568",
};

export default function SubjectIcon({ id, color = SUBJECT_COLORS[id], size = 22 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none" };
  if (id === "physics1" || id === "physics2") {
    return (
      <svg {...common}>
        <path d="M3 21V3" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M3 21H21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M3.5 17C7 17 8 6 13 6C17 6 16.5 13 20.5 13" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      </svg>
    );
  }
  if (id === "biology") {
    return (
      <svg {...common}>
        <path d="M19 5C19 5 19.5 13 13.5 18C8.5 22 4 19.5 4 19.5C4 19.5 3 13.5 8 9C12.5 5 19 5 19 5Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 6L9.5 15.5" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    );
  }
  if (id === "chemistry") {
    return (
      <svg {...common}>
        <path d="M9 3H15" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 3.5V9.5L4.8 18.2C4.2 19.3 5 20.5 6.2 20.5H17.8C19 20.5 19.8 19.3 19.2 18.2L14 9.5V3.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 15.5C8.5 14.3 10 16.5 12 15.5C14 14.5 15.5 16.3 17 15.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    );
  }
  if (id === "environmental") {
    return (
      <svg {...common}>
        <path d="M12 3L17 11H14L18 17H6L10 11H7L12 3Z" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17V21" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    );
  }
  if (id === "government") {
    return (
      <svg {...common}>
        <path d="M12 3L13.3 6.6L17 7.1L14.3 9.6L15 13.3L12 11.4L9 13.3L9.7 9.6L7 7.1L10.7 6.6L12 3Z" fill="#A8434B" stroke="#A8434B" strokeWidth="0.8" strokeLinejoin="round"/>
        <path d="M5.5 14L6.3 16L8.4 16.3L6.9 17.8L7.3 19.9L5.5 18.9L3.7 19.9L4.1 17.8L2.6 16.3L4.7 16L5.5 14Z" fill="#5B6FA8" stroke="#5B6FA8" strokeWidth="0.7" strokeLinejoin="round"/>
        <path d="M18.5 14L19.3 16L21.4 16.3L19.9 17.8L20.3 19.9L18.5 18.9L16.7 19.9L17.1 17.8L15.6 16.3L17.7 16L18.5 14Z" fill="#5B6FA8" stroke="#5B6FA8" strokeWidth="0.7" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (id === "ushistory") {
    return (
      <svg {...common}>
        <path d="M6 3V21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 4H18L15.5 7.5L18 11H6" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M6 5.5H12.5M6 7.5H12.5M6 9.5H12.5" stroke={color} strokeWidth="1" strokeLinecap="round"/>
      </svg>
    );
  }
  if (id === "englang") {
    return (
      <svg {...common}>
        <path d="M19 4C19 4 12 5 8 11C6 14 5 18 4.5 20C6.5 19.5 10 18 13 16C19 12 19 4 19 4Z" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 14.5L5 19" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M4.5 20L4 21.5" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    );
  }
  if (id === "englit") {
    return (
      <svg {...common}>
        <path d="M4 20H20" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="5.5" y="7" width="3.2" height="13" stroke={color} strokeWidth="1.5" fill="none"/>
        <rect x="14.5" y="9" width="3.2" height="11" stroke={color} strokeWidth="1.5" fill="none"/>
        <g transform="rotate(12 11.5 14)">
          <rect x="9.8" y="7.5" width="3.2" height="12.5" stroke={color} strokeWidth="1.5" fill="none"/>
        </g>
      </svg>
    );
  }
  return null;
}
