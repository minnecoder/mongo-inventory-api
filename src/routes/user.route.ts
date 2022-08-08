import express from 'express';
import controller from '../controllers/user.controller';

const router = express.Router();

router.route('/').get(controller.getUsers).post(controller.addUser);

router.route('/:userId').get(controller.getSingleUser).put(controller.updateUser).delete(controller.deleteUser);

router.route('/login').post(controller.loginUser);

module.exports = router;
