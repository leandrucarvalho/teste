const orderService = require('../services/orderService');

class OrderController {
  async createOrder(req, res, next) {
    try {
      const order = await orderService.createOrder(req.body);
      return res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }

  async getOrderById(req, res, next) {
    try {
      const { orderId } = req.params;
      const order = await orderService.getOrderById(orderId);
      if (!order) {
        return res.status(404).json({ message: 'Pedido não encontrado' });
      }
      return res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }

  async listAllOrders(req, res, next) {
    try {
      const orders = await orderService.listAllOrders();
      return res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  async updateOrder(req, res, next) {
    try {
      const { orderId } = req.params;
      const order = await orderService.updateOrder(orderId, req.body);
      if (!order) {
        return res.status(404).json({ message: 'Pedido não encontrado para atualização' });
      }
      return res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }

  async deleteOrder(req, res, next) {
    try {
      const { orderId } = req.params;
      const deleted = await orderService.deleteOrder(orderId);
      if (!deleted) {
        return res.status(404).json({ message: 'Pedido não encontrado para exclusão' });
      }
      return res.status(200).json({ message: 'Pedido removido com sucesso' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OrderController();
