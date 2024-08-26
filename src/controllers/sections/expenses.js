const User = require('../../models/User')

const expenses = async (req, res) => {
    const id = req.params.id

    const { outstandingExpenses, paidExpenses } = req.body

    // Check if user exists

    try {
        const user = await User.findById(id, '-password')

        if (!user) {
            return res.status(404).json({ msg: 'Usuario não encontrado!' })
        }

        await User.updateOne(
            {_id: id},
            { 
                $inc: {
                    "data.expenses.outstandingExpenses": outstandingExpenses,
                    "data.expenses.paidExpenses": paidExpenses
                }
            }
        )
    
        res.status(201).json({ msg: "Valores atualizados" })

    } catch (error) {
        res.status(400).json({ msg: "Adição de valores falhou. Tente novamente mais tarde" })
    }
}

module.exports = expenses