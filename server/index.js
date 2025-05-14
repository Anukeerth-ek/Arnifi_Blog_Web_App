const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

// App Init
const app = express();

// Middleware - apply before routes
app.use(cors());
app.use(express.json({ limit: '30mb' })); // Ensure JSON body parsing
app.use(express.urlencoded({ extended: true })); // Also parse URL-encoded bodies

// Debug middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/blogs", blogRoutes);

// Root
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));