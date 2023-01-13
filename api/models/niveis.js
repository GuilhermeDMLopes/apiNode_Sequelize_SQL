'use strict';
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Niveis', {
    descr_nivel: DataTypes.STRING
  }, {});
  Niveis.associate = function(models) {
    // Conforme informações do diagrama no arquivo index.js do diretorio API
    //Niveis tem relação de um pra varios com Turmas
    //Faz as associações
    Niveis.hasMany(models.Turmas,
      {
        //Sequelize Vai criar no banco uma coluna NiveiID como FK. Para personalizar o nome, fazemos:
        foreignKey: 'nivel_id'
      })    
  };
  return Niveis;
};