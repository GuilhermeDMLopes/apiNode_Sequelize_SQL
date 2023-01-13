//Ponto de entrada de todas as rotas. Substitui as rotas de index.js do diretorio api

//Para pegar o corpo das requisições
const bodyParser = require('body-parser')
//importando as rotas de pessoas
const pessoas = require('./pessoasRoute')

//Inserindo rotas
module.exports = app => {
    app.use(bodyParser.json())
    //Para usar as rotas de pessoas
    app.use(pessoas)

    /*
    //Teste de endpoint
    app.get('/teste', (req, res) => {
        res.status(200).send({mensage: 'boas vindas a API'})
    })
    */
    //Retornar Pessoas  
}