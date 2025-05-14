const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const authMiddleware = require('./middlewares/authMiddleware'); // ✅ Import it
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true }));

// Debug logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

// ✅ Sample protected route for testing
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "You accessed a protected route!", userId: req.user });
});

// Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));