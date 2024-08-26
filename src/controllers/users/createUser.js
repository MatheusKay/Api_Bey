const bcrypt = require('bcrypt')

const User = require('../../models/User')

const registerUser = async (req, res) => {
    const { name, email, password, confirmpassword } = req.body

    //validations
    if(!name) {
        return res.status(422).json({ msg: 'O nome é obrigatorio' })
    }
    if(!email) {
        return res.status(422).json({ msg: 'O email é obrigatorio' })
    }
    if(!password) {
        return res.status(422).json({ msg: 'A senha é obrigatorio' })
    }
    if(password !== confirmpassword) {
        return res.status(422).json({ msg: 'Por favor insira a mesma senha' })
    }

    // Check if user exists

    const userExists = await User.findOne({ email: email })

    if (userExists) {
        return res.status(422).json({ msg: 'Esse email ja esta sendo utilizado' })
    }

    // Create password

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // Create User 

    const user = new User({
        name,
        email,
        password: passwordHash,
    })

    try {
        await user.save()

        return res.status(201).json({ msg: "Usuario criado com sucesso!" })
    } catch (error) {
        console.log(error)

        return res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde" })
    }
}

module.exports = registerUser