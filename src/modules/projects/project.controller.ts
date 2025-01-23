import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { projectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const payload = req.body;
  // console.log({ payload });
  const result = await projectServices.createProject(payload);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const result = await projectServices.getAllProjects();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Projects retrived successfully',
    data: result,
  });
});
const getSingleProjects = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectServices.getSingleProjects(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project retrived successfully',
    data: result,
  });
});
const updateProjects = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await projectServices.updateProjects(id, payload);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});
const deleteProjects = catchAsync(async (req, res) => {
  const { id } = req.params;
  await projectServices.deleteProjects(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project deleted successfully',
    data: null,
  });
});

export const projectControllers = {
  getAllProjects,
  getSingleProjects,
  updateProjects,
  deleteProjects,
  createProject,
};
