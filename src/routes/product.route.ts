import express from 'express';
import controller from '../controllers/product.controller';

const router = express.Router();

router.route('/').get(controller.getAllProducts).post(controller.createProduct);

router.route('/:id').get(controller.getProductById).put(controller.updateProduct).delete(controller.deleteProduct);

module.exports = router;
