const pool = require('../db/db');


async function createpost(userId, title, content) {
    const [result] = await pool.query(
        'INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)',
        [userId, title, content]
    );
    return { id: result.insertId, userId, title, content };
}

async  function getPostsByUserId(userId) {
    const [rows] = await pool.query(
        'SELECT * FROM posts WHERE user_id = ?',
        [userId]
    );
    return rows;
}


async function getAllPostsFromDB() {
    const [rows] = await pool.query(
        'SELECT * FROM posts'
    );
    return rows;
}

async function getPostById(id) {
    const [rows] = await pool.query(
        'SELECT * FROM posts WHERE id = ?',
        [id]
    );
    return rows[0];
}

async function editPostById(id, title, content) {
    const [result] = await pool.query(
        'UPDATE posts SET title = ?, content = ? WHERE id = ?',
        [title, content, id]
    );
    return result.affectedRows > 0;
}

async function deletePostById(id) {
    const [result] = await pool.query(
        'DELETE FROM posts WHERE id = ?',
        [id]
    );
    return result.affectedRows > 0;
}

async function commentOnPostById(postId, userId, comments) {
    const [result] = await pool.query(
        'INSERT INTO comments (post_id, user_id, comments) VALUES (?, ?, ?)',
        [postId, userId, comments]
    );
    return { id: result.insertId, postId, userId, comments };
}

async function likePostById(postId, userId) {
    const [result] = await pool.query(
        'INSERT INTO likes (post_id, user_id) VALUES (?, ?)',
        [postId, userId]
    );
    return { id: result.insertId, postId, userId };
}





module.exports = {
    createpost,
    getPostsByUserId,
    getAllPostsFromDB,
    getPostById,
    editPostById,
    deletePostById,
    commentOnPostById,
    likePostById
};