const User = require('../../models/User')

const objectives = async (req, res) => {
    const id = req.params.id

    const infosObjective = req.body

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
                    "data.planningTable": infosObjective
                }
            }
        )
    
        res.status(201).json({ msg: "Objetivo adicionado" })

    } catch (error) {
        res.status(400).json({ msg: "Adição de objetivo falhou. Tente novamente mais tarde" })
    }
}

module.exports = objectives