const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blogController');
const auth = require('../middlewares/authMiddleware');

router.get("/", auth, blogCtrl.getAllBlogs);
router.get("/my-blogs", auth, blogCtrl.getMyBlogs);
router.post("/", auth, blogCtrl.createBlog);
router.put("/:id", auth, blogCtrl.updateBlog);
router.delete("/:id", auth, blogCtrl.deleteBlog);

module.exports = router;
