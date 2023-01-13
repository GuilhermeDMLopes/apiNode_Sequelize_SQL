//Arquivo com as rotas para o modelo Pessoas

//Chamando Router, ferramenta do express
const { Router } = require('express')
//Importando o controller de pessoas
const PessoaController = require('../controllers/PessoaController')

//Iniciando router
const router = Router()

//Rota para chamar o metodo em pessoasController para pegar todas as pessoas
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

module.exports = router