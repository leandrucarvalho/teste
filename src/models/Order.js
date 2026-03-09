const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  orderId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  creationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Orders', // Changed to avoid conflict with SQL reserved word 'Order'
  timestamps: true,
});

module.exports = Order;
