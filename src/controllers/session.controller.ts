import { Request, Response, NextFunction } from 'express';
import Session from '../models/session.model';

const getAllSessions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sessions = await Session.find();
        res.status(200).json(sessions);
    } catch (error) {
        next(error);
    }
};

const getSessionById = async (req: Request, res: Response, next: NextFunction) => {
    const sessionId = req.params.id;

    try {
        const session = await Session.findById(sessionId);
        res.status(200).json(session);
    } catch (error) {
        next(error);
    }
};

const createSession = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const session = new Session(req.body);
        const newSession = await session.save();
        res.status(201).json(newSession);
    } catch (error) {
        next(error);
    }
};

const updateSession = async (req: Request, res: Response, next: NextFunction) => {
    const sessionId = req.params.id;
    const updateSession = req.body;

    try {
        const session = await Session.findByIdAndUpdate(sessionId, updateSession);
        res.status(200).json(session);
    } catch (error) {
        next(error);
    }
};

const deleteSession = async (req: Request, res: Response, next: NextFunction) => {
    const sessionId = req.params.id;

    try {
        const session = await Session.findByIdAndDelete(sessionId);
        res.status(200).json(session);
    } catch (error) {
        next(error);
    }
};

export default { getAllSessions, getSessionById, createSession, updateSession, deleteSession };
