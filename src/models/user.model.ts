import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    verified: boolean;
    password: string;
    role: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        verified: { type: Boolean, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IUserModel>('User', UserSchema);
