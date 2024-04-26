const ManageData = require("../DataAccess/ManageData");
const Logger = require("../common/Logging");

class Project {
  //Get ProjectList
  async GetProjectList(req, res) {
    try {
      console.log(Logger.Request(""));
      const data = await ManageData.GetProjectListParams();
      console.log(Logger.Response("ProjectList Found successfully"));
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //Get Project By Id
  async GetProjectById(req, res) {
    const id = req.params.id;
    try {
      console.log(Logger.Request(""));
      const data = await ManageData.GetProjectByIdParams(id);
      console.log(Logger.Response(""));
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //Add New Project
  async AddProject(req, res) {
    try {
      console.log(Logger.Request(""));

      let {
        ProjectName,
        StartDate,
        EndDate,
        ProjectManager,
        Budget,
        Status,
        Description,
      } = req.body;
      const data = await ManageData.AddProjectParams(
        ProjectName,
        StartDate,
        EndDate,
        ProjectManager,
        Budget,
        Status,
        Description
      );
      console.log(Logger.Response("Project Added Successfully"));
      res.status(200).json({ Message: "Project Added Successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json(error);
    }
  }

  //Update Existing Project
  async UpdateProject(req, res) {
    try {
      console.log(Logger.Request(""));

      let {
        ProjectId,
        ProjectName,
        StartDate,
        EndDate,
        ProjectManager,
        Budget,
        Status,
        Description,
      } = req.body;

      const data = await ManageData.UpdateProjectParams(
        ProjectId,
        ProjectName,
        StartDate,
        EndDate,
        ProjectManager,
        Budget,
        Status,
        Description
      );
      console.log(Logger.Response("Project Updated Successfully"));
      res.status(200).json({ Message: "Project Updated Successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //Delete Existing Project By Setting Flag = true
  async DeleteProject(req, res) {
    try {
      console.log(Logger.Request(""));
      const id = req.params.id;

      const data = await ManageData.DeleteProjectParams(id);
      console.log(Logger.Response("Project Deleted Successfully"));
      res.status(200).json({ Message: "Project Deleted Successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new Project();
