  
function validatePost(req, res, next) {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({
           success: false,
           message: 'Title and content are required' 

            });
    }
    next();
}

function authenticate(req, res, next) {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // decoded must include id when token was signed
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
}

module.exports = { 
    validatePost,
    authenticate
};