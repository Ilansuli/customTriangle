import React from "react";
import type { Point } from "../../../types";

interface AngleArcProps {
  vertex: Point;
  p1: Point;
  p2: Point;
  radius: number;
  stroke?: string;
  strokeWidth?: number;
}

const AngleArc: React.FC<AngleArcProps> = ({
  vertex,
  p1,
  p2,
  radius,
  stroke = "red",
  strokeWidth = 1,
}) => {
  const v1 = { x: p1.x - vertex.x, y: p1.y - vertex.y };
  const v2 = { x: p2.x - vertex.x, y: p2.y - vertex.y };

  const len1 = Math.sqrt(v1.x ** 2 + v1.y ** 2);
  const len2 = Math.sqrt(v2.x ** 2 + v2.y ** 2);
  const u1 = { x: v1.x / len1, y: v1.y / len1 };
  const u2 = { x: v2.x / len2, y: v2.y / len2 };

  // arc endpoints
  const start = { x: vertex.x + u1.x * radius, y: vertex.y + u1.y * radius };
  const end = { x: vertex.x + u2.x * radius, y: vertex.y + u2.y * radius };

  // sweep flag
  const cross = u1.x * u2.y - u1.y * u2.x;
  const sweep = cross < 0 ? 0 : 1;

  return (
    <path
      d={`M ${start.x},${start.y} A ${radius},${radius} 0 0,${sweep} ${end.x},${end.y}`}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
    />
  );
};

export default AngleArc;
