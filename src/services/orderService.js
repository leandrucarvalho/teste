const { Order, Item, sequelize } = require('../models');

class OrderService {
  async createOrder(data) {
    const transaction = await sequelize.transaction();
    try {
      // Mapping input data to DB schema
      const mappedOrder = {
        orderId: data.numeroPedido,
        value: data.valorTotal,
        creationDate: data.dataCriacao,
      };

      const order = await Order.create(mappedOrder, { transaction });

      const mappedItems = data.items.map(item => ({
        orderId: data.numeroPedido,
        productId: item.idItem,
        quantity: item.quantidadeItem,
        price: item.valorItem,
      }));

      await Item.bulkCreate(mappedItems, { transaction });

      await transaction.commit();
      
      // Return order with its items
      return await Order.findByPk(data.numeroPedido, {
        include: [{ model: Item, as: 'items' }]
      });
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async getOrderById(orderId) {
    return await Order.findByPk(orderId, {
      include: [{ model: Item, as: 'items' }]
    });
  }

  async listAllOrders() {
    return await Order.findAll({
      include: [{ model: Item, as: 'items' }]
    });
  }

  async updateOrder(orderId, data) {
    const transaction = await sequelize.transaction();
    try {
      const existingOrder = await Order.findByPk(orderId);
      if (!existingOrder) {
        return null;
      }

      // Mapping input data to DB schema for updates
      const mappedOrder = {
        value: data.valorTotal,
        creationDate: data.dataCriacao,
      };

      await existingOrder.update(mappedOrder, { transaction });

      if (data.items && data.items.length > 0) {
        // Delete existing items and create new ones
        await Item.destroy({ where: { orderId }, transaction });

        const mappedItems = data.items.map(item => ({
          orderId,
          productId: item.idItem,
          quantity: item.quantidadeItem,
          price: item.valorItem,
        }));

        await Item.bulkCreate(mappedItems, { transaction });
      }

      await transaction.commit();
      return await this.getOrderById(orderId);
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async deleteOrder(orderId) {
    const order = await Order.findByPk(orderId);
    if (!order) {
      return false;
    }
    await order.destroy();
    return true;
  }
}

module.exports = new OrderService();
