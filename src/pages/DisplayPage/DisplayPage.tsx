import { useLocation } from "react-router-dom";
import type { Point } from "../../types";
import AngleLabel from "./components/AngleLabel";
import AngleArc from "./components/AngleArc";
import { distance } from "./utils";

const DisplayPage: React.FC = () => {
  const location = useLocation();
  const points: Point[] = location.state?.points || [];
  const path = points.map((p) => `${p.x},${p.y}`).join(" ");

  const a = distance(points[1], points[2]);
  const b = distance(points[0], points[2]);
  const c = distance(points[0], points[1]);

  const angleA =
    (Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)) * 180) / Math.PI;
  const angleB =
    (Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)) * 180) / Math.PI;
  const angleC = 180 - angleA - angleB;
  const angles = [angleA, angleB, angleC];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Triangle</h2>
      <div
        style={{
          width: "800px",
          height: "800px",
          border: "1px solid black",
          position: "relative",
        }}
      >
        <svg
          width="800"
          height="800"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <polygon points={path} fill="white" stroke="black" strokeWidth="2" />

          <AngleArc
            vertex={points[0]}
            p1={points[1]}
            p2={points[2]}
            radius={30}
          />
          <AngleArc
            vertex={points[1]}
            p1={points[0]}
            p2={points[2]}
            radius={30}
          />
          <AngleArc
            vertex={points[2]}
            p1={points[0]}
            p2={points[1]}
            radius={30}
          />

          <AngleLabel
            vertex={points[0]}
            p1={points[1]}
            p2={points[2]}
            text={`${angles[0].toFixed(1)}°`}
          />
          <AngleLabel
            vertex={points[1]}
            p1={points[0]}
            p2={points[2]}
            text={`${angles[1].toFixed(1)}°`}
          />
          <AngleLabel
            vertex={points[2]}
            p1={points[0]}
            p2={points[1]}
            text={`${angles[2].toFixed(1)}°`}
          />
        </svg>
      </div>
    </div>
  );
};
export default DisplayPage;
