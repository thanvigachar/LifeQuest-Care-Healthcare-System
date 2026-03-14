import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    image: "/doc1.jpg",
    description: "Specialist in cardiovascular diseases with over 10 years of experience.",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialization: "Pediatrician",
    image: "/doc6.jpg",
    description: "Expert in child healthcare and development with a friendly approach.",
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    specialization: "Neurologist",
    image: "/doc8.jpg",
    description: "Experienced in diagnosing and treating neurological disorders.",
  },
  {
    id: 4,
    name: "Dr. George Doe",
    specialization: "ENT",
    image: "/doc2.jpg",
    description: "Specialist in ENT.",
  },
];

const Doctors = () => {
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    specialization: '',
    image: '',
    description: '',
  });

  const [doctorList, setDoctorList] = useState(doctors);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({
      ...newDoctor,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDoctorData = {
      ...newDoctor,
      id: doctorList.length + 1,
      image: newDoctor.image || '/default_image.jpg', // Use the default image if no image is provided
    };
    setDoctorList([...doctorList, newDoctorData]);
    setNewDoctor({ name: '', specialization: '', image: '', description: '' }); // Reset the form
    setShowPopup(true); // Show the popup message
    setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Doctors List</h1>
      <p style={styles.description}>Meet our highly qualified doctors.</p>

      {/* Popup Message */}
      {showPopup && (
        <div style={styles.popup}>
          <p style={styles.popupMessage}>Doctor Added Successfully!</p>
        </div>
      )}

      {/* Add Doctor Form */}
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Add Doctor</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newDoctor.name}
            onChange={handleChange}
            placeholder="Doctor's Name"
            style={styles.input}
            required
          />
          <input
            type="text"
            name="specialization"
            value={newDoctor.specialization}
            onChange={handleChange}
            placeholder="Specialization"
            style={styles.input}
            required
          />
          <input
            type="text"
            name="image"
            value={newDoctor.image}
            onChange={handleChange}
            placeholder="Image URL (Optional)"
            style={styles.input}
          />
          <textarea
            name="description"
            value={newDoctor.description}
            onChange={handleChange}
            placeholder="Description"
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.submitButton}>Add Doctor</button>
        </form>
      </div>

      {/* Doctors List */}
      <div style={styles.grid}>
        {doctorList.map((doctor) => (
          <div key={doctor.id} style={styles.card}>
            <img src={doctor.image} alt={doctor.name} style={styles.image} />
            <h2 style={styles.name}>{doctor.name}</h2>
            <p style={styles.specialization}>{doctor.specialization}</p>
            <p style={styles.description}>{doctor.description}</p>
            {/* <Link to={`/doctors/${doctor.id}`} style={styles.link}>
              View Profile
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f7f6',
    minHeight: '100vh',
  },
  header: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  description: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '30px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  subHeader: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    height: '100px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  name: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '5px',
  },
  specialization: {
    fontSize: '16px',
    color: '#007bff',
    marginBottom: '10px',
  },
  link: {
    fontSize: '16px',
    color: '#28a745',
    textDecoration: 'none',
    marginTop: '10px',
    display: 'inline-block',
  },
  popup: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    zIndex: '1000',
    fontSize: '18px',
    textAlign: 'center',
  },
  popupMessage: {
    margin: '0',
  },
};

export default Doctors;
