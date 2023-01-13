const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
//adicionando rota para pegar por id
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
//Adicionando rota para criar pessoa
router.post('/pessoas', PessoaController.criaPessoa)
//Adicionando rota para atualizar pessoa
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
//Deletando pessoa
router.delete('/pessoas/:id', PessoaController.deletaPessoa)

module.exports = router