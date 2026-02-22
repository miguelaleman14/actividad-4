const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (username === "miguel" && password === "123") {
        const token = jwt.sign(
            { user: "miguel" }, 
            process.env.JWT_SECRET || 'clave_secreta', 
            { expiresIn: '1h' }
        );

        return res.json({
            message: "Login exitoso",
            token: token 
        });
    }
    res.status(401).json({ message: "Error" });
};