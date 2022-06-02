import mongoose, { Document, Schema } from 'mongoose';

export interface ISession {
    sessionToken: string;
    userId: number;
    valid: boolean;
    userAgent: string;
    ip: string;
}

export interface ISessionModel extends ISession, Document {}

const SessionSchema: Schema = new Schema(
    {
        sessionToken: { type: String, required: true },
        userId: { type: Number, required: true },
        valid: { type: Boolean, required: true },
        userAgent: { type: String, required: true },
        ip: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ISessionModel>('Session', SessionSchema);
