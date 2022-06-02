import { Request, Response, NextFunction } from 'express';
import Customer from '../models/customer.model';

export const getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        next(error);
    }
};

export const getCustomerById = async (req: Request, res: Response, next: NextFunction) => {
    const customerId = req.params.id;

    try {
        const customer = await Customer.findById(customerId);
        res.status(200).json(customer);
    } catch (error) {
        next(error);
    }
};

export const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customer = new Customer(req.body);
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        next(error);
    }
};

export const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const customerId = req.params.id;
    const updateCustomer = req.body;

    try {
        const customer = await Customer.findByIdAndUpdate(customerId, updateCustomer);
        res.status(200).json(customer);
    } catch (error) {
        next(error);
    }
};

export const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const customerId = req.params.id;

    try {
        const customer = await Customer.findByIdAndDelete(customerId);
        res.status(200).json(customer);
    } catch (error) {
        next(error);
    }
};
