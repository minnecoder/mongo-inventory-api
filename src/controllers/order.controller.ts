import { Request, Response, NextFunction } from 'express';
import Order from '../models/order.model';

export const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

export const getOrderById = async (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.params.id;

    try {
        const order = await Order.findById(orderId);
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
};

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order = new Order(req.body);
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (error) {
        next(error);
    }
};

export const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.params.id;
    const updateOrder = req.body;

    try {
        const order = await Order.findByIdAndUpdate(orderId, updateOrder);
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
};

export const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.params.id;

    try {
        const order = await Order.findByIdAndDelete(orderId);
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
};
