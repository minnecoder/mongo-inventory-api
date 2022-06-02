import { Request, Response, NextFunction } from 'express';
import Supplier from '../models/supplier.model';

const getAllSuppliers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    } catch (error) {
        next(error);
    }
};

const getSupplierById = async (req: Request, res: Response, next: NextFunction) => {
    const supplierId = req.params.id;

    try {
        const supplier = await Supplier.findById(supplierId);
        res.status(200).json(supplier);
    } catch (error) {
        next(error);
    }
};

const createSupplier = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const supplier = new Supplier(req.body);
        const newSupplier = await supplier.save();
        res.status(201).json(newSupplier);
    } catch (error) {
        next(error);
    }
};

const updateSupplier = async (req: Request, res: Response, next: NextFunction) => {
    const supplierId = req.params.id;
    const updateSupplier = req.body;

    try {
        const supplier = await Supplier.findByIdAndUpdate(supplierId, updateSupplier);
        res.status(200).json(supplier);
    } catch (error) {
        next(error);
    }
};

const deleteSupplier = async (req: Request, res: Response, next: NextFunction) => {
    const supplierId = req.params.id;

    try {
        const supplier = await Supplier.findByIdAndDelete(supplierId);
        res.status(200).json(supplier);
    } catch (error) {
        next(error);
    }
};

export default { getAllSuppliers, getSupplierById, createSupplier, updateSupplier, deleteSupplier };
