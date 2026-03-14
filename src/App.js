import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import Appointments from "./pages/Appointments";
import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";
import AddDoctor from './pages/AddDoctor';
import Doctors from "./pages/Doctors";

// Inline styles for the navigation bar
const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#271776",
    padding: "10px 20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  link: {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#ffcc00",
  },
  content: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
};

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
        <Link to="/doctors" style={styles.link}>Doctors</Link>
        <Link to="/sign-in" style={styles.link}>Sign In</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        {/* <Link to="/settings" style={styles.link}>Settings</Link> */}
        <Link to="/admin" style={styles.link}>Admin</Link>
        {/* <Link to="/dashboard" style={styles.link}>Dashboard</Link> */}
      </nav>

      {/* Content Area */}
      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        <Route path="/appointments" element={<Appointments />} /> 
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctors" element={<Doctors/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

