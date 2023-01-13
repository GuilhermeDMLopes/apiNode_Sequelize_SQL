'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Pessoas.associate = function(models) {
    // Conforme informações do diagrama no arquivo index.js do diretorio API
    //Pessoas tem relação de um pra varios com Turmas e Matriculas
    //Faz as associações
    Pessoas.hasMany(models.Turmas, {
      //Sequelize Vai criar no banco uma coluna PessoaID como FK. Para personalizar o nome, fazemos:
      foreignKey: 'docente_id'
    }) 
    Pessoas.hasMany(models.Matriculas, {
      //Sequelize Vai criar no banco uma coluna PessoaID como FK. Para personalizar o nome, fazemos:
      foreignKey: 'estudante_id'
    })
  };
  return Pessoas;
};