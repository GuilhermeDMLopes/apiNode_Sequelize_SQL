//Classe Controller do modelo Pessoa

//conectando ao modelo/database
//Por padrão o JS procura um arquivo index, não precisando coloc-alo no require
const database = require('../models')

//Criando classe de controle
class PessoaController {
    //Métodos CRUD para ler o que está no banco
    //Static serve para chamar o metodo sem precisar instanciar o objeto
    //async para esperar o método resolver em segundo plano as ações
    static async pegaTodasAsPessoas(req, res) {
        try {
            //pega o que esta sendo retornado em pessoas.js.
            //ele ira consultar a tabela de pessoas e trazer o resultado para nós
            //substitui a query "select * from Pessoas;"
            const todasAsPessoas = await database.Pessoas.findAll()
            //retorna a resposta da requisição e converte em JSON
            return res.status(200).json(todasAsPessoas)
        } catch(error) {
            //retorna o erro
            return res.status(500).json(error.message)
        }
    }
}

//exportando a classe controller para ser usada
module.exports = PessoaController;