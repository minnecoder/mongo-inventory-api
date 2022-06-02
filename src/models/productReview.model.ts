import mongoose, { Document, Schema } from 'mongoose';

export interface IProductReview {
    productId: number;
    userId: number;
    rating: number;
    reviewText: string;
}

export interface IProductReviewModel extends IProductReview, Document {}

const ProductReviewSchema: Schema = new Schema(
    {
        productId: { type: Number, required: true },
        userId: { type: Number, required: true },
        rating: { type: Number, required: true },
        reviewText: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IProductReviewModel>('ProductReview', ProductReviewSchema);
