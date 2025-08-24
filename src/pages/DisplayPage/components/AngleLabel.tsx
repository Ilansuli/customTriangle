import React from "react";
import type { Point } from "../../../types";

interface AngleLabelProps {
  vertex: Point;
  p1: Point;
  p2: Point;
  text: string;
}

const AngleLabel: React.FC<AngleLabelProps> = ({ vertex, p1, p2, text }) => {
  const v1 = { x: p1.x - vertex.x, y: p1.y - vertex.y };
  const v2 = { x: p2.x - vertex.x, y: p2.y - vertex.y };

  const len1 = Math.sqrt(v1.x ** 2 + v1.y ** 2);
  const len2 = Math.sqrt(v2.x ** 2 + v2.y ** 2);
  const u1 = { x: v1.x / len1, y: v1.y / len1 };
  const u2 = { x: v2.x / len2, y: v2.y / len2 };

  const bis = { x: u1.x + u2.x, y: u1.y + u2.y };
  const lenb = Math.sqrt(bis.x ** 2 + bis.y ** 2);
  const ub = { x: bis.x / lenb, y: bis.y / lenb };

  const pos = { x: vertex.x + ub.x * 30, y: vertex.y + ub.y * 30 };

  return (
    <text x={pos.x} y={pos.y} fontSize="10" fill="black">
      {text}
    </text>
  );
};

export default AngleLabel;
