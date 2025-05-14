const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
app.use("/api/protected", authMiddleware, protectedRouteHandler);
module.exports = router;
