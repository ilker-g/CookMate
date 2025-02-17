import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './HomePage'
import Login from "./Components/Login";
import Recipes from "./Components/Recipes";

function App() {
 

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
