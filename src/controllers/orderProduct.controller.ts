import { Request, Response, NextFunction } from 'express';
import OrderProduct from '../models/orderProduct.model';

export const getAllOrderProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orderProducts = await OrderProduct.find();
        res.status(200).json(orderProducts);
    } catch (error) {
        next(error);
    }
};

export const getOrderProductById = async (req: Request, res: Response, next: NextFunction) => {
    const orderProductId = req.params.id;

    try {
        const orderProduct = await OrderProduct.findById(orderProductId);
        res.status(200).json(orderProduct);
    } catch (error) {
        next(error);
    }
};

export const createOrderProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orderProduct = new OrderProduct(req.body);
        const newOrderProduct = await orderProduct.save();
        res.status(201).json(newOrderProduct);
    } catch (error) {
        next(error);
    }
};

export const updateOrderProduct = async (req: Request, res: Response, next: NextFunction) => {
    const orderProductId = req.params.id;
    const updateOrderProduct = req.body;

    try {
        const orderProduct = await OrderProduct.findByIdAndUpdate(orderProductId, updateOrderProduct);
        res.status(200).json(orderProduct);
    } catch (error) {
        next(error);
    }
};

export const deleteOrderProduct = async (req: Request, res: Response, next: NextFunction) => {
    const orderProductId = req.params.id;

    try {
        const orderProduct = await OrderProduct.findByIdAndDelete(orderProductId);
        res.status(200).json(orderProduct);
    } catch (error) {
        next(error);
    }
};
