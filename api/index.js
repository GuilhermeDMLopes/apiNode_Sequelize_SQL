//Continuação da branch populandoBanco Vamos aplicar o padrao MVC.
const express = require('express');
//bodyParser movido para routes
//importar rotas
const routes = require('./routes')

const app = express()
const port = 3500;

//chamando as rotas passando o app do express como parametro.
routes(app);

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app;

/*
O modelo MVC utiliza os diretórios:
Model - Cnectado ao banco, mantendo o modelo de negócio 
View - Engloba os Routers. Como os dados são retornados, mostrados para o usuario (Postman ou Front-end)
Controller - é o intermediário entre o banco (Model) e a aplicação para não deixar o banco muito acessivel para a aplicação
https://cursos.alura.com.br/course/orm-nodejs-api-sequelize-mysql/task/76894
Cada modelo da nossa aplicação tem sem próprio controlador

O padrão MVC Pode possuir camadas extras conforme a complexidade do projeto.
Exemplos de camadas extras são: middlewares para autenticação de usuários e a chamada camada de serviços, que pode ser implementada 
para separar os métodos de acesso aos modelos, não sendo nesse caso o modelo acessado diretamente pelo controlador.
*/