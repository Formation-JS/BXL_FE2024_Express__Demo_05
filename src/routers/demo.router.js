import { Router } from 'express';
import demoController from '../controllers/demo.controller.js';
import { authorizeMiddleware } from '../middlewares/auth.middleware.js';

const demoRouter = Router();

demoRouter.route('/public')
    .get(demoController.public);

demoRouter.route('/private')
    .get(authorizeMiddleware(), demoController.private);

demoRouter.route('/admin')
    .get(authorizeMiddleware('Admin'), demoController.admin);

export default demoRouter;