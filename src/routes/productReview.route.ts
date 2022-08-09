import express from 'express';
import controller from '../controllers/productReview.controller';

const router = express.Router();

router.route('/').get(controller.getAllProductReviews).post(controller.createProductReview);

router.route('/:id').get(controller.getProductReviewById).put(controller.updateProductReview).delete(controller.deleteProductReview);

module.exports = router;
