const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../../models/User')

const loginUser = async (req, res) => {
    const { email, password } = req.body

    // Validation

    if(!email) {
        return res.status(422).json({ msg: 'O email é obrigatorio' })
    }
    if(!password) {
        return res.status(422).json({ msg: 'A senha é obrigatorio' })
    }

    // Check if user exists

    const user = await User.findOne({ email: email })

    if (!user) {
        return res.status(404).json({ msg: 'Usuario não encontrado!' })
    }

    // Check if password match

    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
        return res.status(422).json({ msg: 'Senha invalida!' })
    }

    try {
        const secret = process.env.SECRET

        const token = jwt.sign(
            {
                id: user._id
            }, 
            secret
        )

        res.status(200).json({ msg: 'Autenticação realizada com sucesso', token })
    } catch (error) {
        console.log(error)

        return res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde" })
    }
}

module.exports = loginUser