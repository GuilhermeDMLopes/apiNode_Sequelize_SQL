//Subindo servidor local com express. Neste projeto usaremos o modelo antigo de importação
const express = require('express');
const bodyParser = require('body-parser')

const app = express()

//Avisando o express que algum trecho de codigo fara o meio de campo entre as requisições
//e o proprio express. Neste caso sera um bodyParser que pegara o que vai chegar via requisição e converter em JSON
app.use(bodyParser.json())

const port = 3500;

//Rota de teste de endpoint
app.get('/teste', (req, res) => {
    res.status(200).send({mensage: 'boas vindas a API'})
})

//Express ficar ouvindo o servidor na porta.
//No entando, para fazer qualquer alteração, será necessário derrubar o servidor e subir novamente
//Para rodar simultaneamente, usamos o nodemon
app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app;

/*
squelize-cli é um cli para se conectar com o banco, enviar comandos, etc.
para iniciar o sequelize, usamos o comando: npx sequelize-cli init.
Este comando cria alguns diretórios automáticos para nós.
Vamos passar essas pastas para dentro da pasta api.
Para avisar nossa aplicação que temos um banco mysql e que precisamos nos conectar a ele,
vamos ate a pasta com o config.json e inserir os dados do banco.
Arquivo index.js em MOdels faz o gerenciamento de todos os modelos do banco
*/