import React, { useState } from "react";

// Inline CSS styles
const styles = {
  container: {
    padding: "20px",
    backgroundImage: "url('/background3.png')",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    color: "black",
    marginBottom: "20px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heroContainer: {
    textAlign: "center",
    marginBottom: "30px",
    color: "black",
  },
  biographyContainer: {
    textAlign: "center",
    marginBottom: "30px",
    color: "black",
  },
  biographyImage: {
    width: "100%",
    maxWidth: "400px",
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
  contactInfo: {
    textAlign: "center",
    marginTop: "20px",
    backgroundColor: "#e9e9e9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

const AboutUs = () => {
  // State to toggle the contact info visibility
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleButtonClick = () => {
    setShowContactInfo(!showContactInfo); // Toggle contact info visibility
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Learn More About Us | LifeQuest Care</h1>

      {/* Hero section */}
      <div style={styles.heroContainer}>
        <h2>Our Mission</h2>
        <img
          src="/whoweare.png" // Image from the public folder (ensure the image is in public)
          alt="Who We Are"
          style={styles.image}
        />
        <p>We are dedicated to providing the best care to our patients.</p>
      </div>

      {/* Biography section */}
      <div style={styles.biographyContainer}>
        <h2>Who We Are</h2>
        <img
          src="/about.png" // Image from the public folder (ensure the image is in public)
          alt="About Us"
          style={styles.biographyImage}
        />
        <p>
          LifeQuest Care is a healthcare organization committed to ensuring
          that every individual receives personalized, high-quality care.
        </p>
      </div>

      {/* Call to Action button */}
      <div style={{ textAlign: "center" }}>
        <button style={styles.button} onClick={handleButtonClick}>
          Get in Touch
        </button>
      </div>

      {/* Conditional rendering for Contact Info */}
      {showContactInfo && (
        <div style={styles.contactInfo}>
          <h3>Contact Us</h3>
          <p>Email: contact@lifequestcare.com</p>
          <p>Phone: +1 (800) 123-4567</p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
