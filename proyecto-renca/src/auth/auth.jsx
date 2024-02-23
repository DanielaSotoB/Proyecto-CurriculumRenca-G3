import jwt from 'jsonwebtoken';

const jwtSecret = 'tu_secreto'; 

function generateToken(user) {
    return jwt.sign({ user }, jwtSecret, { expiresIn: '1h' });
}

function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
        return res.status(401).json({ message: 'Token inválido' });
    }
    req.user = decoded.user;
    next();
    });
}

export { generateToken, verifyToken };
