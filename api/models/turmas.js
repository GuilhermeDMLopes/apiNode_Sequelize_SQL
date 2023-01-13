'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turmas.associate = function(models) {
    // Conforme informações do diagrama no arquivo index.js do diretorio API
    //Turmas tem relação de um pra varios com Matriculas
    //Faz as associações
    Turmas.hasMany(models.Matriculas, {
      //Sequelize Vai criar no banco uma coluna TurmaID como FK. Para personalizar o nome, fazemos:
      foreignKey: 'turma_id'
    }) 
    //Faz a relação da FK com a PK da tabela Pessoas
    Turmas.belongsTo(models.Pessoas, {
      foreignKey: 'docente_id'
    })
    //Faz a relação da FK com a PK da tabela Niveis
    Turmas.belongsTo(models.Niveis, {
      foreignKey: 'nivel_id'
    })   
  };
  return Turmas;
};