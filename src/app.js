import express from 'express';
import { apiRouter } from './routers/index.js';

// Variable d'en
const { NODE_ENV, PORT } = process.env;

// WebAPI setup
const app = express();

// Middleware
app.use(express.json());

// Routing
app.use('/api', apiRouter);

// Start
app.listen(PORT, (error) => {
    if (error) {
        console.log('Web API on error');
        console.log(error);
        return;
    }

    console.log(`Web API is running on port ${PORT} [${NODE_ENV}]`);
});