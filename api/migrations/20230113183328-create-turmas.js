'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      //Referenciando no arquivo de migração quais as colunas que vão receber as chaves estrangeiras
      //FK de turmas com a PK de Pessoas
      docente_id: {
        //Como ela é uma chave, não pode ser null
        allowNull: false,
        //tipo da variavel, tipo do dado
        type: Sequelize.INTEGER,
        //Modelo que ele vai referenciar, através da chave
        references: { model: 'Pessoas', key: 'id'}
      },
      //Referenciando no arquivo de migração quais as colunas que vão receber as chaves estrangeiras
      //FK de turmas com PK de niveis
      nivel_id: {
        //Como ela é uma chave, não pode ser null
        allowNull: false,
        //tipo da variavel, tipo do dado
        type: Sequelize.INTEGER,
        //Modelo que ele vai referenciar, através da chave
        references: { model: 'Niveis', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Turmas');
  }
};