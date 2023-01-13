const database = require('../models')

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    //Pegando apenas uma pessoa
    static async pegaUmaPessoa(req, res) {
        //pegando id da pessoa
        const { id } = req.params
        try {      
            //Retorna a pessoa pelo id
            //findOne precisa de parametros para saber o que retornar
            //No caso ele vai encontrar um objeto(nome da coluna do banco) id, do tipo Number de valor (id) que vem do parametro da requisição
            const umaPessoa = await database.Pessoas.findOne({where: {id: Number(id)}})
            //Retorna para a view (Postman, front)
            return res.status(200).json(umaPessoa)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    //Criar pessoas
    static async criaPessoa(req, res) {
        //Cria através do body da requisição
        const novaPessoa = req.body
        try {
            //criando pessoa com body da requisição como parametro
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            //Retorna para a view (Postman, front)
            return res.status(200).json(novaPessoaCriada)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Atualizar registro
    static async atualizaPessoa(req, res){
        //atualiza atraves do corpo da requisição
        const novasInfos = req.body
        //insere o id da pessoa que quero alterar
        const { id } = req.params
        try { 
            //Fazendo atualização passando o que deve ser atualizado e em qual pessoa
            //Não precisa criar variavel pois o metodo update retorna 0 ou 1
            await database.Pessoas.update(novasInfos, { where: {id: Number(id)}})
            //Passa para a variavel as atualizações e conseguirmos retornar o objeto atualizado
            const pessoaAtualizada = await database.Pessoas.findOne( {where: {id: Number(id)}})
            //Retorna para a view (Postman, front).
            return res.status(200).json(pessoaAtualizada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    //Deletar registro
    static async deletaPessoa(req, res){
        //recebe o id como parametro
        const { id } = req.params
        try {
            //Chamando metodo de delete
            await database.Pessoas.destroy( { where: {id: Number(id)}})
            //Retorna para a view (Postman, front).
            return res.status(200).json({message: `A Pessoa de id ${id} foi removida com sucesso!`})
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController;