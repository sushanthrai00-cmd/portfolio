const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ===============================
// TEST ROUTE
// ===============================
app.get("/", (req, res) => {
  res.json({
    message: "Sushanth Rai Portfolio Backend is running 🚀",
  });
});

// ===============================
// PROJECTS API
// ===============================
app.get("/api/projects", (req, res) => {
  const projects = [
    
      {
  id: 1,
  title: "Pocket RC Cars",
  description:
    "A Shopify e-commerce store built for showcasing and selling remote-controlled cars with a modern and user-friendly shopping experience.",
  technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
  github: "#",
  live: "https://sushanth-rai.myshopify.com/"
},
   {
  id: 2,
  title: "College Attendance",
  description:
    "A college attendance management application for managing and tracking student attendance.",
  technologies: ["Python", "Flask", "PostgreSQL", "HTML", "CSS"],
  github: "#",
  live: "http://127.0.0.1:5001"
},

   
  ];

  res.json(projects);
});

// ===============================
// CONTACT FORM API
// ===============================
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Please fill in all fields.",
    });
  }

  console.log("📩 New Contact Message");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.status(200).json({
    message: "Message received successfully!",
  });
});

// ===============================
// START SERVER
// ===============================
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});