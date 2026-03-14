import React, { useState, useEffect } from "react";

// Inline CSS styles (unchanged)
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f8ff",
    backgroundImage: "url('/background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "#333",
    padding: "30px",
    textAlign: "center",
  },
  logo: {
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "120px",
    height: "auto",
  },
  heroSection: {
    padding: "60px 20px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    borderRadius: "10px",
    marginBottom: "30px",
  },
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  biographySection: {
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  departmentList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "0",
    margin: "30px 0",
  },
  departmentItem: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
  },
  departmentImage: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  departmentName: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  messageFormSection: {
    marginTop: "50px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#271776",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

const Home = () => {
  const [departments, setDepartments] = useState([]);

  // Populate departments
  useEffect(() => {
    setDepartments([
      {
        id: 1,
        name: "ENT",
        description: "Specializing in ear, nose, and throat treatments.",
        image: "/departments/ent.jpg", // Ensure this file exists in /public/departments
      },
      {
        id: 2,
        name: "Cardiology",
        description: "Advanced heart care and cardiology services.",
        image: "/departments/cardio.jpg", // Ensure this file exists in /public/departments
      },
      {
        id: 3,
        name: "Neurology",
        description: "Comprehensive care for neurological disorders.",
        image: "/departments/neuro.jpg", // Ensure this file exists in /public/departments
      },
      {
        id: 4,
        name: "Orthopedics",
        description: "Specializing in bone and joint health.",
        image: "/departments/ortho.jpg", // Ensure this file exists in /public/departments
      },
      {
        id: 5,
        name: "Pediatrics",
        description: "Children Specialist.",
        image: "/departments/pedia.jpg", // Ensure this file exists in /public/departments
      },
    ]);
  }, []);

  return (
    <div style={styles.container}>
      {/* Logo */}
      <img src="/logo1.png" alt="Logo" style={styles.logo} />

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>
          Welcome to LifeQuest Care | Your Trusted Healthcare Provider
        </h1>
        <img
          src="/hospital.png"
          alt="Hero"
          style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }}
        />
      </div>

      {/* About Us Section */}
      <div style={styles.biographySection}>
        <h2>About Us</h2>
        <img
          src="/about.png"
          alt="About Us"
          style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
        />
        <p>
          LifeQuest Care is a healthcare organization committed to ensuring
          that every individual receives personalized, high-quality care.
        </p>
      </div>

      {/* Departments Section */}
      <div>
        <h2>Our Departments</h2>
        <div style={styles.departmentList}>
          {departments.map((dept) => (
            <div key={dept.id} style={styles.departmentItem}>
              <img src={dept.image} alt={dept.name} style={styles.departmentImage} />
              <span style={styles.departmentName}>{dept.name}</span>
              <p>{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
