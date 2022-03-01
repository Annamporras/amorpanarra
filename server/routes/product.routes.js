const router = require('express').Router()
const Product = require('../models/Product.model')

// GET ALL PRODUCTS
router.get('/getAllProducts', (req, res) => {

    Product
        .find()
        .select('name image price glutenfree')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// GET ONE PRODUCT
router.get('/getOneProduct/:product_id', (req, res) => {
    const { product_id } = req.params

    Product
        .findById(product_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// CREATE PRODUCT
router.post('/createProduct', (req, res) => {   //fileUploader.single('image'), (PONER CUADO INSTALEMOS CLOUDINARY)
    const { name, description, ingredients, price, category, glutenfree, featured, image } = req.body

    Product
        .create({ name, description, ingredients, price, category, glutenfree, featured, image })  //req.file.path
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//EDIT PRODUCT
router.put('/edit/:product_id', (req, res) => {
    const { product_id } = req.params
    const { name, description, ingredients, price, category, glutenfree, featured, image } = req.body

    Product
        .findByIdAndUpdate(product_id, { name, description, ingredients, price, category, glutenfree, featured, image }, { new: true }) //, image: req.file.path
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


//DELETE PRODUCT
router.delete('/delete/:product_id', (req, res) => {
    const { product_id } = req.params

    Product
        .findByIdAndDelete(product_id)
        .then(res.json({ message: 'Producto eliminado' }))  // PONER UN THEN QUE ESCUPA UN MENSAJE DE CONTEXTO EN EL CLIENT o BIEN UN JSON CON LEL PRODUCTO BORRADO
        .catch(err => res.status(500).json(err))
})


module.exports = router
