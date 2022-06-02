import { Request, Response, NextFunction } from 'express';
import ProductSupplier from '../models/productSupplier.model';

const getAllProductSuppliers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productSuppliers = await ProductSupplier.find();
        res.status(200).json(productSuppliers);
    } catch (error) {
        next(error);
    }
};

const getProductSupplierById = async (req: Request, res: Response, next: NextFunction) => {
    const productSupplierId = req.params.id;

    try {
        const productSupplier = await ProductSupplier.findById(productSupplierId);
        res.status(200).json(productSupplier);
    } catch (error) {
        next(error);
    }
};

const createProductSupplier = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productSupplier = new ProductSupplier(req.body);
        const newProductSupplier = await productSupplier.save();
        res.status(201).json(newProductSupplier);
    } catch (error) {
        next(error);
    }
};

const updateProductSupplier = async (req: Request, res: Response, next: NextFunction) => {
    const productSupplierId = req.params.id;
    const updateProductSupplier = req.body;

    try {
        const productSupplier = await ProductSupplier.findByIdAndUpdate(productSupplierId, updateProductSupplier);
        res.status(200).json(productSupplier);
    } catch (error) {
        next(error);
    }
};

const deleteProductSupplier = async (req: Request, res: Response, next: NextFunction) => {
    const productSupplierId = req.params.id;

    try {
        const productSupplier = await ProductSupplier.findByIdAndDelete(productSupplierId);
        res.status(200).json(productSupplier);
    } catch (error) {
        next(error);
    }
};

export default { getAllProductSuppliers, getProductSupplierById, createProductSupplier, updateProductSupplier, deleteProductSupplier };
