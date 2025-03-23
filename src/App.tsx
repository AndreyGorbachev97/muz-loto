import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadXlsx from "./components/UploadXlsx/UploadXlsx";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadXlsx />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/settings" element={<div>Настройки</div>} />
      </Routes>
    </Router>
  );
}

export default App;