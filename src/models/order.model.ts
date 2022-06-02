import mongoose, { Document, Schema } from 'mongoose';

export interface IOrder {
    customerId: number;
    orderStatus: string;
    orderTotal: number;
}

export interface IOrderModel extends IOrder, Document {}

const OrderSchema: Schema = new Schema(
    {
        customerId: { type: Number, required: true },
        orderStatus: { type: String, required: true },
        orderTotal: { type: Number, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IOrderModel>('Order', OrderSchema);
