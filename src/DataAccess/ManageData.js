const sequelize = require("../../config/connection");
const { QueryTypes } = require("sequelize");

class ManageData {
  async GetProjectListParams() {
    const results = await sequelize.query(
      "SELECT * FROM fx(:f_action, :f_projectid)",
      {
        replacements: {
          f_action: "SELECTALL",
          f_projectid: null,
        },
        type: QueryTypes.SELECT,
      }
    );
    return results;
  }

  async GetProjectByIdParams(id) {
    const results = await sequelize.query(
      "SELECT * FROM fx(:f_action, :f_projectid)",
      {
        replacements: {
          f_action: "S",
          f_projectid: id,
        },
        type: QueryTypes.SELECT,
      }
    );
    return results;
  }

  async AddProjectParams(
    ProjectName,
    StartDate,
    EndDate,
    ProjectManager,
    Budget,
    Status,
    Description
  ) {
    const results = await sequelize.query(
      "SELECT * FROM manage_project(:f_action, :f_projectid, :f_projectname, :f_startdate, :f_enddate, :f_projectmanager, :f_budget, :f_status, :f_description)",
      {
        replacements: {
          f_action: "I",
          f_projectid: null,
          f_projectname: ProjectName,
          f_startdate: new Date(StartDate),
          f_enddate: new Date(EndDate),
          f_projectmanager: ProjectManager,
          f_budget: Budget,
          f_status: Status,
          f_description: Description,
        },
        type: QueryTypes.SELECT,
      }
    );
    return results;
  }

  async UpdateProjectParams(
    ProjectId,
    ProjectName,
    StartDate,
    EndDate,
    ProjectManager,
    Budget,
    Status,
    Description
  ) {
    const results = await sequelize.query(
      "SELECT * FROM manage_project(:f_action, :f_projectid, :f_projectname, :f_startdate, :f_enddate, :f_projectmanager, :f_budget, :f_status, :f_description)",
      {
        replacements: {
          f_action: "U",
          f_projectid: parseInt(ProjectId),
          f_projectname: ProjectName || null,
          f_startdate: StartDate ? new Date(StartDate) : null,
          f_enddate: EndDate ? new Date(EndDate) : null,
          f_projectmanager: ProjectManager || null,
          f_budget: Budget || null,
          f_status: Status || null,
          f_description: Description || null,
        },
        type: QueryTypes.SELECT,
      }
    );
    return results;
  }

  async DeleteProjectParams(id) {
    const results = await sequelize.query(
      "SELECT * FROM manage_project(:f_action, :f_projectid, :f_projectname, :f_startdate, :f_enddate, :f_projectmanager, :f_budget, :f_status, :f_description)",
      {
        replacements: {
          f_action: "D",
          f_projectid: id,
          f_projectname: null,
          f_startdate: null,
          f_enddate: null,
          f_projectmanager: null,
          f_budget: null,
          f_status: null,
          f_description: null,
        },
        type: QueryTypes.SELECT,
      }
    );
    return results;
  }
}

module.exports = new ManageData();
