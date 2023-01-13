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

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {      
            const umaPessoa = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(umaPessoa)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res){
        const novasInfos = req.body
        const { id } = req.params
        try { 
            await database.Pessoas.update(novasInfos, { where: {id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne( {where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaPessoa(req, res){
        const { id } = req.params
        try {
            await database.Pessoas.destroy( { where: {id: Number(id)}})
            return res.status(200).json({message: `A Pessoa de id ${id} foi removida com sucesso!`})
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    //Quero trazer a matricula 5 do estudante 1
    //http://localhost:3500/pessoas/1/matricula/5
    //http://localhost:3500/pessoas/:estudanteId/matricula/:matriculaId
    //Criamos um método igual os demais
    static async pegaUmaMatricula(req, res) {
        //Recebe o id da Pessoa(estudante) e o id da matricula por parametro
        const { estudanteId, matriculaId } = req.params
        try {     
            //Vamos acessar o db Matriculas e encontrar a matricula vinculada ao estudante
            const umaMatricula= await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId), 
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    //Criando matricula
    static async criaMatricula(req, res) {
        //Receber o id da pessoa por parametro
        const { estudanteId } = req.params
        //Nova matricula recebe o corpo da requisição mais o id do estudante referente a ela
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId)}
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Atualizar matricula
    static async atualizaMatricula(req, res){
        //Pega o id da pessoa e o id da matricula
        const novasInfos = req.body
        const { estudanteId, matriculaId } = req.params
        try { 
            //Vamos acessar o db Matriculas e encontrar a matricula vinculada ao estudante
            await database.Matriculas.update(novasInfos, { 
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            //Trazer a matricula atualizada. Mesma situação da função atualizaPessoas.
            const matriculaAtualizada = await database.Matriculas.findOne( {where: {id: Number(matriculaId)}})
            return res.status(200).json(matriculaAtualizada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    //Deletar matricula
    static async deletaMatricula(req, res){
        //Pega o id da pessoa e o id da matricula
        const { estudanteId, matriculaId } = req.params
        try {
            //CUIDADO, SE VOCE NAO PASSAR QUAL VOCE QUER DESTRUIR, ELE IRA DESTRUIR TODAS
            await database.Matriculas.destroy( { where: {
                id: Number(matriculaId)
            }
        })
            return res.status(200).json({message: `A Matricula de id ${matriculaId} foi removida com sucesso!`})
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController;