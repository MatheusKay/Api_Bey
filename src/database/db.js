const mongoose = require('mongoose')

// Credencials

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

async function connectDataBase() {
    await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPass}@cluster0.b6oln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
}

module.exports = connectDataBase