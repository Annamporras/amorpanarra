const { Schema, model } = require("mongoose")

const cartSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
},
    {
        timestamps: true,
    }
)

const Cart = model("Cart", cartSchema)

module.exports = Cart