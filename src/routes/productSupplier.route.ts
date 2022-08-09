import express from 'express';
import controller from '../controllers/productSupplier.controller';

const router = express.Router();

router.route('/').get(controller.getAllProductSuppliers).post(controller.createProductSupplier);

router.route('/:id').get(controller.getProductSupplierById).put(controller.updateProductSupplier).delete(controller.deleteProductSupplier);

module.exports = router;
