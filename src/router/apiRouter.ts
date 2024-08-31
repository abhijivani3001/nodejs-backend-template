import { Router } from 'express';
import apiController from '../controller/apiController';
import rateLimiter from '../middleware/rateLimiter';

const router = Router();

router.route('/self').get(rateLimiter, apiController.self); // rateLimiter middleware is added for this route
router.route('/health').get(apiController.health);

export default router;
