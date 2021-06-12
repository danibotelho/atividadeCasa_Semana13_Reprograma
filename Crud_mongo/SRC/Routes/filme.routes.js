const express = require('express')
const router = express.Router()
const controller  = require('../Controllers/filmesController')

//Create - Criar = post
 router.post('/', controller.criaFilme)

//Read - Ler = get
router.get('/', controller.listaFilme)


//Update - Atualizar  = patch
router.patch('/:id', controller.atualizaFilme)



//Delete - Apagar = delete
router.delete('/:id', controller.apagaFilme)




module.exports = router