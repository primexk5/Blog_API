const {createPost, getAllPosts, getSinglePost, editPost, deletePost, commentOnPost, likePost} = require('../controllers/postAuthentication');
const {validatePost, authenticate} = require('../middlewares/postMiddleware');
const {authenticateToken} = require('../middlewares/usermiddleware');

const express = require('express');
const router = express.Router();

router.post('/post', validatePost,authenticateToken, createPost);
router.get('/posts', getAllPosts);
router.get('/post/:id', getSinglePost, authenticateToken);
router.patch('/post/edit/:id', validatePost,authenticateToken, editPost);
router.delete('/post/delete/:id', deletePost, authenticateToken);
router.post('/post/comment/:id', authenticateToken, commentOnPost);
router.post('/post/like/:id', authenticateToken, likePost, authenticateToken);

module.exports = router;