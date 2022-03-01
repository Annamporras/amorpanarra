const router = require('express').Router()
const Product = require('../models/Product.model')


router.get('/getAllProducts', (req, res) => {

    Product
        .find()
        .select('name image price glutenfree')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneProduct/:product_id', (req, res) => {
    const { product_id } = req.params

    Product
        .findById(product_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/createProduct', (req, res) => {   //fileUploader.single('image'), (PONER CUADO INSTALEMOS CLOUDINARY)
    const { name, description, ingredients, price, category, glutenfree, featured } = req.body

    Product
        .create({ name, description, ingredients, price, category, glutenfree, featured, image: req.file.path })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/edit/:product_id', (req, res) => {
    const { product_id } = req.params
    const { name, description, ingredients, price, category, glutenfree, featured } = req.body

    Product
        .findByIdAndUpdate(product_id, { name, description, ingredients, price, category, glutenfree, featured, image: req.file.path }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/delete/:product_id', (req, res) => {
    const { product_id } = req.params

    Product
        .findByIdAndDelete(product_id)
        .then(deletedProduct => res.json(deletedProduct))  // PONER UN THEN QUE ESCUPA UN MENSAJE DE CONTEXTO EN EL CLIENT o BIEN UN JSON CON LEL PRODUCTO BORRADO
        .catch(err => res.status(500).json(err))
})


module.exports = router
