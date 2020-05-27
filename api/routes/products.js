const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET /products'
    })
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
    }
    res.status(201).json({
        message: 'POST /products',
        createdProduct: product
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id == 'special') {
        res.status(200).json({
            message: 'special id'
        });
    } else {
        res.status(200).json({
            message: `Not special id: ${id}`
        })
    }
    
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: `Update a product with id: ${id}`
    })
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;

    res.status(200).json({
        message: `Delete a product with id: ${id}`
    })
});


module.exports = router;