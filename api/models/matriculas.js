'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, {});
  Matriculas.associate = function(models) {
    //Como matrícula é a ponta das associações, ou seja, ela é apenas associada e não faz associações, não precisamos colocar nada
    //No entanto ela tem FKs que fazem relação com outras tabelas
    //Faz a relação da FK com a PK da tabela Pessoas
    Matriculas.belongsTo(models.Pessoas, {
      foreignKey: 'estudante_id'
    })
    //Faz a relação da FK com a PK da tabela Turmas
    Matriculas.belongsTo(models.Turmas, {
      foreignKey: 'turma_id'
    })
  };
  return Matriculas;
};