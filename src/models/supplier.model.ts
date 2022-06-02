import mongoose, { Document, Schema } from 'mongoose';

export interface ISupplier {
    supplierName: string;
    supplierAddress: string;
    supplierCity: string;
    supplierState: string;
    supplierZip: string;
    supplierPhone: string;
    supplierEmail: string;
}

export interface ISupplierModel extends ISupplier, Document {}

const SupplierSchema: Schema = new Schema(
    {
        supplierName: { type: String, required: true },
        supplierAddress: { type: String, required: true },
        supplierCity: { type: String, required: true },
        supplierState: { type: String, required: true },
        supplierZip: { type: String, required: true },
        supplierPhone: { type: String, required: true },
        supplierEmail: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ISupplierModel>('Supplier', SupplierSchema);
