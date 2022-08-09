import express from 'express';
import controller from '../controllers/supplier.controller';

const router = express.Router();

router.route('/').get(controller.getAllSuppliers).post(controller.createSupplier);

router.route('/:id').get(controller.getSupplierById).put(controller.updateSupplier).delete(controller.deleteSupplier);

module.exports = router;
