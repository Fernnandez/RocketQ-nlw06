module.exports = {
    index(req, res) {
        //pegando os valores passados na url da req
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
            // name do input da senha na hora de pegar o valor
        const password = req.body.password

        console.log(`room = ${roomId} questionId = ${questionId} action = ${action} password =${password}`)
    }
}