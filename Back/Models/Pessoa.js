'use strict';

const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pessoa extends Model {
        static associate(Models) {
        }
    }
    Pessoa.init({
        noem: DataTypes.STRING,
        CPF: DataTypes.STRING,
        Telefone: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Pessoa',
    });
    return Pessoa;
}