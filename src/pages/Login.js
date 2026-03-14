import React, { useContext, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("/background9.png")', // Attractive gradient background
    padding: '20px',
    fontFamily: '"Roboto", sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: 'darkBlue',
    fontSize: '72px',
    marginBottom: '10px',
    //textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  input: {
    padding: '12px 15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    outline: 'none',
    transition: 'box-shadow 0.3s ease',
  },
  inputFocus: {
    boxShadow: '0 0 5px #6a11cb',
    borderColor: '#6a11cb',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#271776',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#4534a7',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    marginTop: '10px',
    color: '#555',
  },
  link: {
    color: '#271776',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#4534a7',
  },
};


const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  // Handle login and redirection
  const handleLoginWithAxios = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      // Add a console log to check if we get the expected response
      console.log("Login Response: ", response);
      toast.success(response.data.message);

      // Update authentication state
      setIsAuthenticated(true);

      // Navigate to the appointments page only if login is successful
      navigateTo("/appointments");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.error("Login Error: ", error); // Log error for debugging
    }
  };

  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <p style={{ textAlign: "center" }}>Please Login To Continue</p>
      <form onSubmit={handleLoginWithAxios} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <div style={styles.footer}>
          <p style={{ marginBottom: 0 }}>Not Registered?</p>
          <span
            style={styles.link}
            onClick={() => navigateTo("/sign-in")} // Link to sign-up page
          >
            Register Now
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="submit" // Only trigger the form submit event
            style={styles.button}
            onClick={() => navigateTo("/appointments")}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
