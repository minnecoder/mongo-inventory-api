import express from 'express';
import controller from '../controllers/orderProduct.controller';

const router = express.Router();

router.route('/').get(controller.getAllOrderProducts).post(controller.createOrderProduct);

router.route('/:id').get(controller.getOrderProductById).put(controller.updateOrderProduct).delete(controller.deleteOrderProduct);
