const sequelize = require('../config/database');
const Order = require('./Order');
const Item = require('./Item');
const User = require('./User');

// Relationships
Order.hasMany(Item, { foreignKey: 'orderId', as: 'items', onDelete: 'CASCADE' });
Item.belongsTo(Order, { foreignKey: 'orderId' });

module.exports = {
  sequelize,
  Order,
  Item,
  User,
};
