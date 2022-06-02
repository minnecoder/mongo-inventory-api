import express from 'express';
import controller from '../controllers/customer.controller';

const router = express.Router();

router.route('/').get(controller.getAllCustomers).post(controller.createCustomer);

router.route('/:id').get(controller.getCustomerById).put(controller.updateCustomer).delete(controller.deleteCustomer);
