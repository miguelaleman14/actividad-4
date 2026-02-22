const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth'); 
router.get('/', auth, (req, res) => {
    res.json({
        message: "Lista de productos obtenida con éxito",
        data: [
            { id: 1, name: "Producto A", price: 100 },
            { id: 2, name: "Producto B", price: 200 }
        ]
    });
});

module.exports = router;