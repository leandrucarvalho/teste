const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// All order routes are protected by JWT authMiddleware
router.use(authMiddleware);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - idItem
 *         - quantidadeItem
 *         - valorItem
 *       properties:
 *         idItem:
 *           type: string
 *         quantidadeItem:
 *           type: integer
 *         valorItem:
 *           type: number
 *     Order:
 *       type: object
 *       required:
 *         - numeroPedido
 *         - valorTotal
 *         - dataCriacao
 *         - items
 *       properties:
 *         numeroPedido:
 *           type: string
 *         valorTotal:
 *           type: number
 *         dataCriacao:
 *           type: string
 *           format: date-time
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Item'
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Order created successfully
 *       500:
 *         description: Internal server error
 */
router.post('/', orderController.createOrder); // Create new order

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: List all orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all orders
 */
router.get('/list', orderController.listAllOrders); // List all orders (Optional)

/**
 * @swagger
 * /order/{orderId}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order found
 *       404:
 *         description: Order not found
 */
router.get('/:orderId', orderController.getOrderById); // Get order by ID (Mandatory)

/**
 * @swagger
 * /order/{orderId}:
 *   put:
 *     summary: Update an existing order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 */
router.put('/:orderId', orderController.updateOrder); // Update order by ID (Optional)

/**
 * @swagger
 * /order/{orderId}:
 *   delete:
 *     summary: Delete an order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 */
router.delete('/:orderId', orderController.deleteOrder); // Delete order by ID (Optional)

module.exports = router;
