import { Router } from 'express';
import demoController from '../controllers/demo.controller.js';

const demoRouter = Router();

demoRouter.route('/public')
    .get(demoController.public);

demoRouter.route('/private')
    .get(demoController.private);

demoRouter.route('/admin')
    .get(demoController.admin);

export default demoRouter;