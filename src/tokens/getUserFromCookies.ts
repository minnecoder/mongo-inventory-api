import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import User from '../models/user.model';
import Session from '../models/session.model';
import refreshTokens from './refreshToken';

const JWTSignature = process.env.JWT_SIGNATURE;

const getUserFromCookies = async (req: Request, res: Response) => {
    try {
        // Check to make sure access token exists
        if (req.cookies?.accessToken) {
            const { accessToken } = req.cookies;
            // Decode access token
            const decodedAccessToken = jwt.verify(accessToken, JWTSignature as string);

            // Return user
            return User.findOne({
                where: {
                    // @ts-ignore
                    id: decodedAccessToken?.userId
                }
            });
        }
        if (req?.cookies?.refreshToken) {
            const { refreshToken } = req.cookies;
            // Decode refresh token
            const sessionToken = jwt.verify(refreshToken, JWTSignature as string);
            // Look up session
            const currentSession = await Session.findOne({
                where: {
                    sessionToken: sessionToken
                }
            });

            // Confirm session is valid
            // @ts-ignore
            if (currentSession.valid) {
                // Look up current user
                const currentUser = await User.findOne({
                    where: {
                        // @ts-ignore
                        id: currentSession.userId
                    }
                });
                // @ts-ignore
                await refreshTokens(sessionToken, currentUser.id, role, res);
                // Return current user
                return currentUser;
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(401).send();
    }
};

export default getUserFromCookies;
