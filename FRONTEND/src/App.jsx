import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Achievements from "./pages/achievements/Achievements";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/achivements" element={<Achievements />} />
      </Routes>
    </Router>
  );
}

export default App;
