import { Router } from 'express';
import { projectRoute } from '../modules/projects/project.route';

export const route = Router();

const modules = [{ path: '/project', route: projectRoute }];

modules.forEach((el) => route.use(el.path, el.route));
