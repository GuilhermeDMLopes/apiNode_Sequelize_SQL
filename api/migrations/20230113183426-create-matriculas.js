'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      //Referenciando no arquivo de migração quais as colunas que vão receber as chaves estrangeiras
      //FK de Matriculas com PK de Pessoas
      estudante_id: {
        //Como ela é uma chave, não pode ser null
        allowNull: false,
        //tipo da variavel, tipo do dado
        type: Sequelize.INTEGER,
        //Modelo que ele vai referenciar, através da chave
        references: { model: 'Pessoas', key: 'id'}
      },
      //Referenciando no arquivo de migração quais as colunas que vão receber as chaves estrangeiras
      //FK de Matriculas com PK de Turmas
      turma_id: {
        //Como ela é uma chave, não pode ser null
        allowNull: false,
        //tipo da variavel, tipo do dado
        type: Sequelize.INTEGER,
        //Modelo que ele vai referenciar, através da chave
        references: { model: 'Turmas', key: 'id'}
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
    return queryInterface.dropTable('Matriculas');
  }
};