import { Router } from 'express';
import errors500Router from './errors500.routes';

const routes = Router();

routes.use('/errors500', errors500Router);

export default routes;
