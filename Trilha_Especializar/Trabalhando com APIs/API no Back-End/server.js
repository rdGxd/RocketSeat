const express = require('express')

const app = express()

app.listen('3000')

// GET
// app.route('/').get((req, res) => res.send("hello"))
// app.route('/sobre').get((req, res) => res.send("hello sobre"))

//middleware
app.use(express.json())

// POST
// app.route('/').post( (req,res) => res.send(req.body) )

//PUT = EDITAR
// let author = "Rodrigo"
// app.route('/').get((req, res) => res.send(author))
// app.route('/').put((req, res) => {
//     author = req.body.author
//     res.send(author)
// })

//DELETE

app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador)
})