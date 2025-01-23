"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const project_route_1 = require("../modules/projects/project.route");
exports.route = (0, express_1.Router)();
const modules = [{ path: '/project', route: project_route_1.projectRoute }];
modules.forEach((el) => exports.route.use(el.path, el.route));
