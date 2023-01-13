//Continuação da branch metodosCRUD. Vamos criar mais tabelas, migrações, relações e associações.
const express = require('express');
const routes = require('./routes')

const app = express()
const port = 3500;

routes(app);

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app;

/*
Comando parar criar cada modelo no banco de dados para cada tabela
Seguindo o diagrama do projeto, as informações de pessoas são usadas nas tabelas turma e estudante.
Devemos criar os modelos que não usem as chaves estrangeiras 
Vamos começar por Niveis

npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string

Em seguida vamos criar a tabela Turma pois ela fornece dados para matricula
Só passamos os atributos que forem realmente das tabelas. Os que forem PK ou FK não são passados

npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly

Por ultimo, podemos criar a tabela Matriculas

npx sequelize-cli model:create --name Matriculas --attributes status:string

Os arquivos nas pastas migrations e models são criados em ordem de criação. Por isso fazemos a criação seguindo uma ordem
Como Matrícula tem dados de Turmas e Pessoas, ela deve ser a última criada para poder reconhecer as tabelas anteriores.

A tabela turma tem algumas chaves estrangeiras que fazem ligação com outras tabelas.

O sequelize faz associações com todos os tipos do SQL: 1pra1, 1praMuitos, Muitos pra muitos.
Relações do diagrama: 
Tabela pessoas faz relação de 1 pra muitos com a tabela Turma (Uma Pessoa professor pode trabalhar em diversas turmas)
Tabela Niveis faz relação 1 pra muitos com a tabela Turmas (Um nivel pode ter varias turmas)
Tabela Turma faz relação 1 pra muitos (ou nenhuma) com a tabela Matrículas (Uma turma pode ter varias mtriculas ou nenhuma (caso ninguem se matricule))
Tabela Pessoas faz relação 1 pra muitos com a tabela Matriculas (UM estudante pode ter varias matriculas também (ele pode se matricular no basico, avançado))

Depois de realizar todas as relações e associeações, por última, fazemos as migrações

npx sequelize-cli db:migrate

dentro do terminal mysql, podemos rodar para ver se foi criado corretamente: 
describe [nomeDaTabela]; 
OBS: em 'key', podemos ter o valor MUL que significa que pode ter multiplos valores

*/