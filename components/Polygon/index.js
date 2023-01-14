import React from "react";

export default function Polygon({
  colorPolygon = "#FFDE59",
  points = "1,30 20,0 0,50",
  backgroundColor = "bg-gray-100",
}) {
  return (
    <svg
      className={`absolute ${backgroundColor} w-full h-full`}
      viewBox="0 0 50 50"
      preserveAspectRatio="none"
    >
      <polygon points={points} style={{ fill: colorPolygon }} />
    </svg>
  );
}
