'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalaCinema extends Model {
    
  }
  SalaCinema.init({
    numero: DataTypes.INTEGER,
    quantidade_assentos: DataTypes.INTEGER,
    tem_3d: DataTypes.BOOLEAN,
    tem_preferencial: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SalaCinema',
  });
  return SalaCinema;
};