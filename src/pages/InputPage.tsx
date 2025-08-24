import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Point } from "../types";

const InputPage: React.FC = ({}) => {
  const [points, setPoints] = useState<Point[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const navigate = useNavigate();

  const handleChange = (index: number, axis: "x" | "y", value: string) => {
    const newPoints = [...points];
    newPoints[index] = { ...newPoints[index], [axis]: Number(value) };
    setPoints(newPoints);
  };

  const handleShow = () => {
    navigate("/display", { state: { points } });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Enter 3 Points</h2>
      {points.map((p, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <input
            type="number"
            value={p.x}
            onChange={(e) => handleChange(i, "x", e.target.value)}
            placeholder={`x${i + 1}`}
          />
          <input
            type="number"
            value={p.y}
            onChange={(e) => handleChange(i, "y", e.target.value)}
            placeholder={`y${i + 1}`}
            style={{ marginLeft: "10px" }}
          />
        </div>
      ))}
      <button onClick={handleShow}>Show Triangle</button>
    </div>
  );
};
export default InputPage;
