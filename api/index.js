//Continuação da branch inserindoDados. Vamos criar os demais controladores para as tabelas.
const express = require('express');
const routes = require('./routes')

const app = express()
const port = 3500;

routes(app);

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app;

/*
Matricula possui um caso especial para criar o controlador e rotas, porque?
Os tipos de dados de matricula so faz sentido se estiver associadas a uma pessoa e/ou a uma turma
Não existirá um arquivo em específico para matriculas, ela estara inserindo dentro dos controladores de pessoa

o body para criar matricula deve seguir:
Criamos uma matricula para um estudante na turma 4. 
{
    "status": "confirmado",
    "turma_id": 4
}
*/