async function getPublicRoute(req, res) {
    res.status(200).json({ msg: 'Bem vindo a minha API!!' })
}

module.exports = getPublicRoute