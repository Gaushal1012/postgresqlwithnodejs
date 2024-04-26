const express = require("express");
const router = express.Router();
const ProjectController = require("./src/Controller/Project");
const urls = require("./src/common/urls");

router.get(`${urls.getProjectList}`, ProjectController.GetProjectList);
router.get(`${urls.getProjectById}`, ProjectController.GetProjectById);
router.post(`${urls.addProject}`, ProjectController.AddProject);
router.put(`${urls.updateProject}`, ProjectController.UpdateProject);
router.put(`${urls.deleteProject}`, ProjectController.DeleteProject);

module.exports = router;

