const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = 5000;

const url = "mongodb://localhost:27017";
const dbName = "hospitalDB";
let db;

// Middleware
app.use(cors());
app.use(express.json()); // Correct usage of JSON middleware

// Connect to MongoDB
MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    console.log("Connected to MongoDB");
  })
  .catch(err => console.error(err));

// Routes

// Users
app.post("/api/sign-in", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await db.collection("users").insertOne({ username, password });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await db.collection("users").findOne({ username, password });
  user ? res.json(user) : res.status(404).send("Invalid credentials");
});

// Appointments
app.post("/api/appointments", async (req, res) => {
  try {
    const result = await db.collection("appointments").insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/api/appointments", async (req, res) => {
  const appointments = await db.collection("appointments").find().toArray();
  res.json(appointments);
});

app.delete("/api/appointments/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.collection("appointments").deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).send("Appointment not found");
    }
    
    res.json({ message: "Appointment deleted successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.put("/api/appointments/:id", async (req, res) => {
  const { id } = req.params;
  const { specialty } = req.body; // Only updating the specialty field
  try {
    console.log("Received PUT request to update appointment specialty:", id, specialty); // Log the received data for debugging
    const result = await db.collection("appointments").updateOne(
      { _id: new ObjectId(id) },
      { $set: { specialty } } // Update only the specialty field
    );

    if (result.matchedCount === 0) {
      return res.status(404).send("Appointment not found");
    }

    // Return the updated appointment
    const updatedAppointment = await db.collection("appointments").findOne({ _id: new ObjectId(id) });
    console.log("Updated Appointment: ", updatedAppointment); // Log to verify if the update was applied
    res.json(updatedAppointment);
  } catch (err) {
    console.error("Error updating appointment:", err); // Log any errors here
    res.status(500).send(err.message);
  }
});


app.listen(PORT, () => console.log("Server running on 5000"));
