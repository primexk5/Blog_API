// CREATING A BLOG API

// 3. Post Content tiltle, content, date
// 4  Get single post
// 5. Get all post 
// 6. Edit post
// 7. Delete post
// 8. Comment on post 
// 9. Like post

 const {createpost, getAllPostsFromDB, getPostById, deletePostById, editPostById, commentOnPostById, likePostById}= require('../models/postModel');




 async function createPost(req, res) {
     const { title, content } = req.body;
     const user_id = req.user && req.user.id;
     if (!user_id) {
         return res.status(401).json({ success: false, message: 'Authentication required' });
     }

     try {
         const newPost = await createpost(user_id, title, content);
         res.status(201).json(newPost);
     } catch (err) {
         console.log(err);
         res.status(500).json({
             success: false,
             message: 'Internal server error',
             error: err.message
         });
     }
 }



 async function getAllPosts(req, res) {
     try {
         const posts = await getAllPostsFromDB();
         res.status(200).json(posts);
     } catch (err) {
         res.status(500).json({
             success: false,
             message: 'Internal server error',
             error: err.message
         });
     }
 }


 async function getSinglePost(req, res) {
    const { id } = req.params;
     try {
         const post = await getPostById(id);
         if (!post) {
             return res.status(404).json({
                 success: false,
                 message: 'Post not found'
             });
         }
         res.status(200).json(post);
     } catch (err) {
         res.status(500).json({
             success: false,
             message: 'Internal server error',
             error: err.message
         });
     }
 }



 async function editPost(req, res) {
    const { id } = req.params;
     const {title, content} = req.body;
     try {
         const updatedPost = await editPostById(id, title, content);
         if (!updatedPost) {
             return res.status(404).json({
                 success: false,
                 message: 'Post not found'
             });
         }
         res.status(200).json(updatedPost);
     } catch (err) {
         res.status(500).json({
             success: false,
             message: 'Internal server error',
             error: err.message
         });
     }
 }


 async function deletePost(req, res) {
    const { id } = req.params;
     try {
         const deleted = await deletePostById(id);
         if (!deleted) {
             return res.status(404).json({
                 success: false,
                 message: 'Post not found'
             });
         }
         res.status(200).json({
             success: true,
             message: 'Post deleted successfully'
         });
     } catch (err) {
         res.status(500).json({
             success: false,
             message: 'Internal server error',
             error: err.message
         });
     }
 }

async function commentOnPost(req, res) {
    const { id } = req.params;
    const { comments } = req.body;
    const userId = req.user.id;
    try {
        const newComment = await commentOnPostById(
            id, 
            userId, 
            comments
        );
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
}

async function likePost(req, res) {
    const { id } = req.params;
    const userId = req.user && req.user.id;
    if (!userId) {
        return res.status(401).json({
            success: false,
            message: 'Authentication required'
        });
    }
    try {
        const updatedPost = await likePostById(id, userId);
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message
        });
    }
}

 module.exports = {
     createPost,
        getAllPosts,
        getSinglePost,
        editPost,
        deletePost,
        commentOnPost,
        likePost
 
 };