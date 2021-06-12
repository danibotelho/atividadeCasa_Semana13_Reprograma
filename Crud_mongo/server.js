const express = require('express')
const app = express()

//conectar o mongo
const db = require('./SRC/Data/database')
db.connect()


app.use(express.json())

const filmesRouter = require('./SRC/Routes/filme.routes')
app.use('/filmes', filmesRouter)

app.listen(8080, ()=> console.log('Rodando na porta  8080'))

