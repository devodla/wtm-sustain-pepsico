import { Router } from 'express';

const errors500Router = Router();

errors500Router.get('/', (request, response) => {
  return response.send();
});

export default errors500Router;
