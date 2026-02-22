const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(401).json({ msg: 'Acceso denegado, falta token' });
    }

    try {
        const verified = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET || 'clave_secreta');
        req.user = verified;
        next(); // Continuar a la ruta
    } catch (err) {
        res.status(400).json({ msg: 'Token no válido' });
    }
};