const User = require('../../models/User')

const addProduct = async (req, res) => {
    const id = req.params.id

    const { productId, nameProduct, price } = req.body

    // Check if user exists

    try {
        const user = await User.findById(id, '-password')

        if (!user) {
            return res.status(404).json({ msg: 'Usuario não encontrado!' })
        }

        await User.updateOne(
            {_id: id},
            { 
                $push: {
                    "carrinho": {
                        "productId": productId,
                        "nameProduct": nameProduct,
                        "price": price
                    }
                }
            }
        )
    
        res.status(201).json({ msg: "Adição de produto sucesso" })

    } catch (error) {
        res.status(400).json({ msg: "Adição de produto falhou" })
    }
}

module.exports = addProduct