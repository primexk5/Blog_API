const pool = require('../db/db');

async function createUser(name, username, email, password, gender) {
    const [result] = await pool.query(
        'INSERT INTO users (name, username, email, password, gender, role) VALUES (?, ?, ?, ?, ?, "user")',
        [name, username, email, password, gender]
    );
    return { id: result.insertId, name, username, email, gender};
}

async function getUserByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
}

module.exports = {
    createUser,
    getUserByEmail
};