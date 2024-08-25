const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    carrinho: [
        {
            productId: String,
            nameProduct: String,
            price: Number
        }
    ]
})

module.exports = User