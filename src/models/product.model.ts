import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct {
    productName: string;
    productDesc: string;
    productCost: number;
    productPrice: number;
    onHand: number;
    reorderLevel: number;
    reorderQty: number;
}

export interface IProductModel extends IProduct, Document {}

const ProductSchema: Schema = new Schema(
    {
        productName: { type: String, required: true },
        productDesc: { type: String, required: true },
        productCost: { type: Number, required: true },
        productPrice: { type: Number, required: true },
        onHand: { type: Number, required: true },
        // When item hits this level a reorder is triggered
        reorderLevel: { type: Number, required: true },
        // The number of items to order during a reorder
        reorderQty: { type: Number, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IProductModel>('Product', ProductSchema);
