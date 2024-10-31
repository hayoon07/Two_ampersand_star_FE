import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Fix from "./pages/Fix";
import Mypage from "./pages/Mypage";
import Main from "./pages/Main";
import "./App.css";
import Footer from "./components/Footer";
import Running from "./pages/Running";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fix" element={<Fix />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/running" element={<Running />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
