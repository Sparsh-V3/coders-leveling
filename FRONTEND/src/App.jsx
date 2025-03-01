import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
<<<<<<< HEAD
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
=======
import Achievements from "./pages/achievements/Achievements";
>>>>>>> 3bdfe61c75d7360c5d06cace65767acc270fc6a9

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
=======
        <Route path="/achivements" element={<Achievements />} />
        
>>>>>>> 3bdfe61c75d7360c5d06cace65767acc270fc6a9
      </Routes>
    </Router>
  );
}

export default App;
