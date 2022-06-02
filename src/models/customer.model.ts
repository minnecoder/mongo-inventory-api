import mongoose, { Document, Schema } from 'mongoose';

export interface ICustomer {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
}

export interface ICustomerModel extends ICustomer, Document {}

const CustomerSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ICustomerModel>('Customer', CustomerSchema);
