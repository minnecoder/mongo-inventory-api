import mongoose, { Document, Schema } from 'mongoose';

export interface IOrderProduct {
    orderId: number;
    productId: number;
    quantityOrdered: number;
    productStatus: string;
}

export interface IOrderProductModel extends IOrderProduct, Document {}

const OrderProductSchema: Schema = new Schema(
    {
        orderId: { type: Number, required: true },
        productId: { type: Number, required: true },
        quantityOrdered: { type: Number, required: true },
        productStatus: {
            type: String,
            enum: ['created', 'picked', 'shipped', 'delivered', 'rejected', 'backordered', 'returned', 'credited'],
            default: 'created'
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IOrderProductModel>('OrderProduct', OrderProductSchema);
