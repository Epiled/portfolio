import projects from "./mocks/projects.js";
import ProjectController from "./controllers/ProjectController.js";
import ProjectModel from "./models/ProjectModel.js";
import ProjectView from "./views/ProjectView.js";
import { animation } from "./revelAnimation.js";

projects.map((project) => {
  const model = new ProjectModel(project);
  const view = new ProjectView("[data-projects-list]");
  const controller = new ProjectController(model, view);
  controller.updateView();
});

animation.updateList();
animation.initAnimation();
