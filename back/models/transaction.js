const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Transaction = sequelize.define('transaction', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});

module.exports = Transaction;
