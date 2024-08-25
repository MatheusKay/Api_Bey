const User = require('../../models/User')

const routeUser = async (req, res) => {
    const id = req.params.id

    // Check if user exists

    const user = await User.findById(id, '-password')

    if (!user) {
        return res.status(404).json({ msg: 'Usuario não encontrado!' })
    } 

    res.status(200).json({ user })
}

module.exports = routeUser