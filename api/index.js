//Continuação da branch main. Vamos criar os modelos baseados no arquivo da pasta local
const express = require('express');
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3500;

app.get('/teste', (req, res) => {
    res.status(200).send({mensage: 'boas vindas a API'})
})

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app;

/*
Pelo cli vamos passar os modelos de cada tabela. O comando abaixo vai criar uma tabela de nome Pessoas com os seguintes atributos e tipos de valores
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string

Depois desse comando, dentro da pasta model, será criado um arquivo pessoas.js com os atributos passados por parametro e suas associações
Além dele, foi criado um novo arquivo na pasta migrations que possui o id da tabela (Se ela pode ser nulo, auto-incrementável, se ela é primário e o tipo). Informações de criado em e alterado em
ESte ultimo arquivo possui duas funções (up: o que acontece quando criamos a migração. down: o que acontece que desfazemos a migração). Transofmra tudo de JS em querys conforme o dialeto do arquivo config.json
Se quisermos trocar o tipo de query, dependendo do banco, basta mudar o campo "dialect" para o banco SQL desejado. o Sequelize se carrega de converter/ traduzir do JS para o sintaxe e dialetos do SQL de cada banco.

O que é migração?
É uma transferência de dados entre plataformas. Se mudar o banco de dados, serviços, existem varios processos para migração.

Migração com ORM são alterações incrementais e rastreaveis no banco (alterações na tabela, etc). Como alteramos nossa tabela de forma rastreavel
e caso tenha algum problema, conseguimos voltar ao que era antes, pro estado anterior.
Mudança no esquema de dados: Coordenar alterações feitas por diferentes pessoas do time nas tabelas do banco. Rastrear e reverter alterações feitas no banco para
debugar conflitos e erros.

Devemos sempre criar as tabelas com os nomes no plural pois o sequelize cria as tabelas no banco sempre no plural
Ex: Se criarmos uma tabela chamada "pessoa", o sequelize vai criar no banco a tabela "pessoas" e isso pode nos causar problemas.
No entanto, podemos forçar o sequelize não pluralizar os nomes. Dentro de define(), podemos adicionar o seguinte campo:

sequelize.define('User', {
  // ... (attributes)
}, {
  freezeTableName: true
});

Comando para realizar migração de um banco a outro
npx sequelize-cli db:migrate

Basta acessar o mysql, usar os comandos:
show databases; (será possivel ver o banco escola_ingles)
use escola_ingles; (para acessar o banco)
show tables; (verificar as tabelas existentes)
obs: tera uma tabela chamada SequelizeMeta que foi gerada automaticamente pela migração.
describe Pessoas; (para checar as informações dos atributos, tipos, chaves, etc)
*/