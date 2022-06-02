import { Request, Response, NextFunction } from 'express';
import Product from '../models/product.model';

const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = new Product(req.body);
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.id;
    const updateProduct = req.body;

    try {
        const product = await Product.findByIdAndUpdate(productId, updateProduct);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.id;

    try {
        const product = await Product.findByIdAndDelete(productId);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
