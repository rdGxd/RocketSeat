const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').get((req, res) => res.send(req.query.name))
// app.route('/').post((res, res) => res.send(req.body))
// app.route('/:parametro').get((req, res) => res.send(req.params.parametro))