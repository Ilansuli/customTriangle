import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputPage from "./pages/InputPage";
import DisplayPage from "./pages/DisplayPage/DisplayPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
