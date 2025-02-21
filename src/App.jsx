import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Login from "./Components/Login";
import Recipes from "./Components/Recipes";
import Ingredients from "./Components/Ingredients";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
