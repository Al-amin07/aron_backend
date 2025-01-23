import { IProject } from './project.interfact';
import { Project } from './project.model';

const createProject = async (payload: IProject) => {
  console.log({ payload });
  const result = await Project.create(payload);
  return result;
};

const getAllProjects = async () => {
  const result = await Project.find({});
  return result;
};
const getSingleProjects = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};
const updateProjects = async (id: string, payload: Partial<IProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteProjects = async (id: string) => {
  await Project.findByIdAndDelete(id);
};

export const projectServices = {
  createProject,
  getAllProjects,
  getSingleProjects,
  updateProjects,
  deleteProjects,
};
