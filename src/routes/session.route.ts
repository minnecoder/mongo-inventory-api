import express from 'express';
import controller from '../controllers/session.controller';

const router = express.Router();

router.route('/').get(controller.getAllSessions).post(controller.createSession);

router.route('/:id').get(controller.getSessionById).put(controller.updateSession).delete(controller.deleteSession);
