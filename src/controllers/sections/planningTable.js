const User = require('../../models/User')

const planning = async (req, res) => {
    const id = req.params.id

    const infosPlanning = req.body

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
                    "data.planningTable": infosPlanning
                }
            }
        )
    
        res.status(201).json({ msg: "Item do planejamento adicionado" })

    } catch (error) {
        res.status(400).json({ msg: "Adição de planejamento falhou. Tente novamente mais tarde" })
    }
}

module.exports = planning