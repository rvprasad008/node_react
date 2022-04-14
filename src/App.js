import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserDetails from "./Components/UserDetails";
import "./app.css";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/details" element={<UserDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
