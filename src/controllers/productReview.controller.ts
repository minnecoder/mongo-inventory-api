import { Request, Response, NextFunction } from 'express';
import ProductReview from '../models/productReview.model';

export const getAllProductReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productReviews = await ProductReview.find();
        res.status(200).json(productReviews);
    } catch (error) {
        next(error);
    }
};

export const getProductReviewById = async (req: Request, res: Response, next: NextFunction) => {
    const productReviewId = req.params.id;

    try {
        const productReview = await ProductReview.findById(productReviewId);
        res.status(200).json(productReview);
    } catch (error) {
        next(error);
    }
};

export const createProductReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productReview = new ProductReview(req.body);
        const newProductReview = await productReview.save();
        res.status(201).json(newProductReview);
    } catch (error) {
        next(error);
    }
};

export const updateProductReview = async (req: Request, res: Response, next: NextFunction) => {
    const productReviewId = req.params.id;
    const updateProductReview = req.body;

    try {
        const productReview = await ProductReview.findByIdAndUpdate(productReviewId, updateProductReview);
        res.status(200).json(productReview);
    } catch (error) {
        next(error);
    }
};

export const deleteProductReview = async (req: Request, res: Response, next: NextFunction) => {
    const productReviewId = req.params.id;

    try {
        const productReview = await ProductReview.findByIdAndDelete(productReviewId);
        res.status(200).json(productReview);
    } catch (error) {
        next(error);
    }
};
