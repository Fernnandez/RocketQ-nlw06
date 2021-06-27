const express = require('express');
const questionController = require("./controllers/questionController")
const roomController = require("./controllers/roomController")

const route = express.Router();

route.get('/', (req, res) => res.render("index", { page: 'enter-room' }))
route.get('/create-pass', (req, res) => res.render('index', { page: 'create-pass' }))

route.post("/create-room", roomController.create)
route.get('/room/:room', roomController.open)
// route.get('/room/:room/:isIncorrect', roomController.open)
route.post('/enter-room', roomController.enter)
    // route.get('/enter-room', roomController.enter())

route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.action)
// route.post('/question/:room',)


module.exports = route