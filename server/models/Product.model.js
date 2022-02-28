const { Schema, model } = require("mongoose")

const productSchema = new Schema(
    {
        name: String,
        description: String,
        ingredients: String,
        price: Number,
        image: String,
        category: {
            type: String,
            enum: ['Panes', 'Dulces'],
            default: 'Panes'
        },
        glutenfree: Boolean,
        rating: {
            type: Number,
            min: 1.0,
            max: 5.0,
        },
        featured: Boolean,
    })

const Product = model("Product", productSchema)

module.exports = Product