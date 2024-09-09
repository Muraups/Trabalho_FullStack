'use strict';

const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('Pessoa', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {});
    return Pessoa;
  };