//Continuação da branch fazendoMaisRelacoes_Associacoes. Vamos preencher o banco de dados.
const express = require('express');
const routes = require('./routes')

const app = express()
const port = 3500;

routes(app);

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app;

/*
Vamos popular as outras tabelas.
Basta criar os arquivos em seeds seguindo o modelo demo-pessoas

npx sequelize-cli seed:generate --name demo-nivel
npx sequelize-cli seed:generate --name demo-turmas
npx sequelize-cli seed:generate --name demo-matriculas

//Porque niveis primeiro? Porque as demais tabelas usam dados de niveis
https://cursos.alura.com.br/course/orm-nodejs-api-sequelize-mysql/task/76906

agora vamos popular o banco:

npx sequelize-cli db:seed:all

Falta apenas criar os controladores e as rotas antes de finalizar a API
*/