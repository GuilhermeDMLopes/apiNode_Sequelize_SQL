//Continuação da branch modelos. Vamos popular o banco.
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
Podemos inserir dados na tabela direto no banco, exemplo:
insert into Pessoas (nome, ativo, email, role, createdAt, updatedAt) values ("Guilherme",1,"guilherme@guilherme.com","estudante", NOW(), NOW());
O updatedAt e createdAt, variaveis geradas pelo sequelize também precisam ser preenchidas. Para isso usamos a função NOW() para pegar as datas do momento de criação

No entando, é muito trabalhoso fazer alterações no banco.
Para isso, vamos usar um recurso do SQL que é o seed (semente) para popular o banco.
o recurso seed é suportado pelo sequelize então será por ele que faremos as alterações no banco

as alterações estão no diretório seed.
Vamos gerar um arquivo seed com o nome demo-pessoa. Lembrando: O comando deve ser executado na pasta do projetos
npx sequelize-cli seed:generate --name demo-pessoa
os numeros na frente dos arquivos de criação são as datas de criações dos arquivos.

Vamos rodar o comando de seed para o sequelize conectrar com o banco e enviar os dados para la

npx sequelize-cli db:seed:all.

E como desfazer operações?

Para desafazer migrações: 
Rodou o comando de migração antes de fazer alguma alteração importante em algum modelo e agora as tabelas do banco 
não estão como você precisa? Bom, já comentamos que as migrações em ORM também servem para termos um tipo de “versionamento” 
(feito através do arquivo SequelizeMeta no seu banco) e poder voltarmos o banco a um estado anterior à última alteração.

Como fazer isso? Através dos comandos:

npx sequelize-cli db:migrate:undo

Este comando vai desfazer somente a última migração feita, na ordem em que os arquivos são lidos e executados pelo Sequelize 
(de acordo com as datas e horários no nome dos arquivos). Se você tiver rodado 3 migrações - por exemplo, das tabelas Niveis, 
Turmas e Matriculas, o comando npx sequelize-cli db:migrate:undo vai desfazer apenas Matriculas.
Você pode rodar o mesmo comando novamente para ir desfazendo as migrações na ordem em que foram executadas, ou usar o comando:
db:migrate:undo --name [data-hora]-create-[nome-da-tabela].js

db:migrate:undo --name [data-hora]-create-[nome-da-tabela].js

Para desfazer uma migração específica. Nesse caso, lembre-se que só irá funcionar se não tiver nenhuma outra tabela relacionada a ela!

Para desfazer seeds:
Os seeds servem para termos dados iniciais no banco, normalmente dados de exemplo e/ou para teste. Quando você quiser desfazer essa 
operação para limpar esses dados do banco, pode rodar o comando:

Para desfazer o último seed feito.
npx sequelize db:seed:undo

Para desfazer seeds de uma tabela específica.
npx sequelize-cli db:seed:undo --seed nome-do-arquivo

Para desfazer todos os seeds feitos.
npx sequelize-cli db:seed:undo:all

Ao contrário das migrações, não existe nenhum recurso de “versionamento” de seeds, só é possível incluir no banco e desfazer a 
operação (o que vai deletar os registros do banco).
Se você rodar o :undo em uma tabela e quiser mais tarde utilizar os seeds novamente na mesma tabela, os IDs deles serão outros.

https://cursos.alura.com.br/course/orm-nodejs-api-sequelize-mysql/task/77026
*/