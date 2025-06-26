import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div>Root</div>} />
          <Route path="/123" element={<div>123</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
