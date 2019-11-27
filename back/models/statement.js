const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Statement = sequelize.define('statement', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  money_transaction: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  money_destiny: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type_payment: {
    type: Sequelize.STRING,
    allowNull: false,
  }
  
});

module.exports = Statement;
