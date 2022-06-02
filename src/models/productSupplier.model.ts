import mongoose, { Document, Schema } from 'mongoose';

export interface IProductSupplier {
    productId: number;
    supplierId: number;
    supplierNotes: string;
}

export interface IProductSupplierModel extends IProductSupplier, Document {}
const ProductSupplierSchema: Schema = new Schema(
    {
        productId: { type: Number, required: true },
        supplierId: { type: Number, required: true },
        supplierNotes: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IProductSupplierModel>('ProductSupplier', ProductSupplierSchema);
