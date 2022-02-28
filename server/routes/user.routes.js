const router = require('express').Router()
const User = require('../models/User.model')


router.get('/getAllUsers', (req, res) => {

    User
        .find()
        .select('username email role phone')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneUser/:user_id', (req, res) => {
    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/edit/:user_id', (req, res) => {
    const { user_id } = req.params
    const { username, email, phone, name, number, postCode, city, country } = req.body

    const address = {
        street: {
            name,
            number
        },
        postCode: postCode,
        city: city,
        country: country
    }

    User
        .findByIdAndUpdate(user_id, { username, email, phone, name, number, postCode, city, country }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/delete/:user_id', (req, res) => {
    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .catch(err => res.status(500).json(err))
})

module.exports = router
