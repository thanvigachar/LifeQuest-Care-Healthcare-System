import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate hook for navigation

const Admin = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Functions to handle navigation
  const handleViewDoctors = () => {
    navigate('/doctors'); // Navigate to the Doctor Page
  };

  const handleAddDoctor = () => {
    navigate('/add-doctor'); // Navigate to the Add Doctor page
  };

  // const handleSettings = () => {
  //   navigate('/settings'); // Navigate to the Settings page
  // };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Page</h1>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>Doctor Management</h2>
        <p style={styles.paragraph}>Manage and monitor doctor profiles here.</p>
        <button style={styles.button} onClick={handleViewDoctors}>View Doctors</button>
        <button style={styles.button} onClick={handleAddDoctor}>Add Doctor</button>
      </div>

      {/* <div style={styles.section}>
        <h2 style={styles.subHeader}>Settings</h2>
        <button style={styles.button} onClick={handleSettings}>Settings</button>
      </div> */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("/background.png")', // Replace with your image URL
    backgroundSize: 'cover', // Ensures the image covers the entire container
    backgroundRepeat: 'no-repeat', // Prevents tiling
    backgroundPosition: 'center', // Centers the image
    padding: '20px',
  },
  header: {
    fontSize: '72px',
    color: "white",
    marginBottom: '50px',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '15px 0',
    width: '80%',
    maxWidth: '600px',
  },
  subHeader: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
    transition: 'background-color 0.3s',
  },
};

export default Admin;
