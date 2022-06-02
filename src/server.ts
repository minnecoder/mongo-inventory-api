import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';

const app = express();

// Connect to MongoDB
mongoose
    .connect(config.mongo.url)
    .then(() => {
        Logging.info('Connected to MongoDB');
        StartServer();
    })
    .catch((err) => {
        Logging.error('Error connecting to MongoDB: ');
        Logging.error(err);
    });

// Only start the server if MongoDB is connected
const StartServer = () => {
    app.use((req, res, next) => {
        // Log the request
        Logging.info(`Incoming -> Method:[${req.method}] URL:[${req.url}] IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            // Log the response
            Logging.info(`Response -> Method:[${req.method}] URL:[${req.url}] IP: [${req.socket.remoteAddress}] Status: [${res.statusCode}]`);
        });
        next();
    });

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    //API Rules
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });

    // API Routes

    // Health Check
    app.get('/health', (req, res, next) => res.status(200).json({ message: 'OK' }));

    // Error Handling
    app.use((req, res, next) => {
        const error = new Error('Not found');
        Logging.error(error);

        return res.status(404).json({ message: error.message });
    });

    // Start the server
    app.listen(config.server.port, () => Logging.info(`Server started on port ${config.server.port}`));
};
