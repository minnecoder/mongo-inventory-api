import express from 'express';
import controller from '../controllers/order.controller';

const router = express.Router();

router.route('/').get(controller.getAllOrders).post(controller.createOrder);

router.route('/:id').get(controller.getOrderById).put(controller.updateOrder).delete(controller.deleteOrder);
