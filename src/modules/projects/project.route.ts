import { Router } from 'express';
import { projectControllers } from './project.controller';

const route = Router();

route.get('/', projectControllers.getAllProjects);
route.get('/:id', projectControllers.getSingleProjects);
route.patch('/:id', projectControllers.updateProjects);
route.delete('/:id', projectControllers.deleteProjects);
route.post('/', projectControllers.createProject);

export const projectRoute = route;
