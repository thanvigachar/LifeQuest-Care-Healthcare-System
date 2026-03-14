import React from 'react';
import { Link } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    image: "/doc1.jpg", // Corrected path
    description: "Specialist in cardiovascular diseases with over 10 years of experience.",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialization: "Pediatrician",
    image: "/doc6.jpg", // Corrected path
    description: "Expert in child healthcare and development with a friendly approach.",
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    specialization: "Neurologist",
    image: "/doc8.jpg", // Corrected path
    description: "Experienced in diagnosing and treating neurological disorders.",
  },
  {
    id: 4,
    name: "Dr. George Doe",
    specialization: "ENT",
    image: "/doc2.jpg", // Corrected path
    description: "Specialist in ENT.",
  },
];

const Doctors = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Doctors List</h1>
    <p style={styles.description}>Meet our highly qualified doctors.</p>
    <div style={styles.grid}>
      {doctors.map((doctor) => (
        <div key={doctor.id} style={styles.card}>
          <img src={doctor.image} alt={doctor.name} style={styles.image} />
          <h2 style={styles.name}>{doctor.name}</h2>
          <p style={styles.specialization}>{doctor.specialization}</p>
          <p style={styles.description}>{doctor.description}</p>
          
        </div>
      ))}
    </div>
  </div>
);

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
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  },
};

export default Doctors;
