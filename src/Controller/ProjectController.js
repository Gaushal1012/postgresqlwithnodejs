// const sequelize = require("../../config/connection");
// const { QueryTypes } = require("sequelize");
// const express = require("express");
// const router = express.Router();

// // router.get("/getproject/:id", async (req, res) => {
// //   const id = req.params.id;
// //   try {
// //     console.log("Server is running...");
// //     const results = await sequelize.query("SELECT * FROM fx(:f_action, :f_projectid)", {
// //         replacements: {
// //             f_action: "S",
// //             f_projectid: id
// //         },
// //       type: QueryTypes.SELECT,
// //     });
// //     res.status(200).json(results);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // });

// // router.get("/getproject", async (req, res) => {
// //   try {
// //     console.log("Server is running...");
// //     const results = await sequelize.query("SELECT * FROM fx(:f_action, :f_projectid)", {
// //         replacements: {
// //             f_action: "SELECTALL",
// //             f_projectid: null
// //         },
// //       type: QueryTypes.SELECT,
// //     });
// //     res.status(200).json(results);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // });

// // router.post("/addProject", async (req, res) => {
// //   try {
// //     console.log("Calling PostgreSQL function...");

// //     let {
// //       ProjectName,
// //       StartDate,
// //       EndDate,
// //       ProjectManager,
// //       Budget,
// //       Status,
// //       Description,
// //     } = req.body;

// //     // Call the PostgreSQL function using sequelize.query()
// //     const results = await sequelize.query(
// //       "SELECT * FROM manage_project(:f_action, :f_projectid, :f_projectname, :f_startdate, :f_enddate, :f_projectmanager, :f_budget, :f_status, :f_description)",
// //       {
// //         replacements: {
// //           f_action: "I", // Provide the values for the function parameters
// //           f_projectid: null, // Example value for project ID
// //           f_projectname: ProjectName, // Example value for project name
// //           f_startdate: new Date(StartDate), // Example value for start date
// //           f_enddate: new Date(EndDate), // Example value for end date
// //           f_projectmanager: ProjectManager, // Example value for project manager
// //           f_budget: Budget, // Example value for budget
// //           f_status: Status, // Example value for status
// //           f_description: Description, // Example value for description
// //         },
// //         type: QueryTypes.SELECT,
// //       }
// //     );
// //     res.status(200).json(results);
// //     console.log("Result:", results);
// //   } catch (error) {
// //     console.error("Error:", error);
// //     res.status(500).json(error);
// //   }
// // });

// // router.put("/updateproject", async (req, res) => {
// //     try {
// //       console.log("Calling PostgreSQL function...");
  
// //       let {
// //         ProjectId,
// //         ProjectName,
// //         StartDate,
// //         EndDate,
// //         ProjectManager,
// //         Budget,
// //         Status,
// //         Description,
// //       } = req.body;
// //       console.log(req.body);
  
// //       // Call the PostgreSQL function using sequelize.query()
// //       const results = await sequelize.query(
// //         "SELECT * FROM manage_project(:f_action, :f_projectid, :f_projectname, :f_startdate, :f_enddate, :f_projectmanager, :f_budget, :f_status, :f_description)",
// //         {
// //           replacements: {
// //             f_action: "U",
// //             f_projectid: parseInt(ProjectId), // Ensure correct casing and existence of ProjectId
// //             f_projectname: ProjectName || null,
// //             f_startdate: StartDate ? new Date(StartDate) : null,
// //             f_enddate: EndDate ? new Date(EndDate) : null,
// //             f_projectmanager: ProjectManager || null,
// //             f_budget: Budget || null,
// //             f_status: Status || null,
// //             f_description: Description || null,
// //           },
// //           type: QueryTypes.SELECT,
// //         }
// //       );
// //       res.status(200).json(results);
// //       console.log("Result:", results);
// //     } catch (error) {
// //       console.error("Error:", error);
// //       res.status(500).json({ error: "Internal Server Error" });
// //     }
// //   });

// //   router.put("/deleteproject/:id", async (req, res) => {
// //     try {
// //       console.log("Calling PostgreSQL function...");
// //       const id = req.params.id;
// //       let {
// //         ProjectId,
// //         ProjectName,
// //         StartDate,
// //         EndDate,
// //         ProjectManager,
// //         Budget,
// //         Status,
// //         Description,
// //       } = req.body;
// //       console.log(req.body);
  
// //       // Call the PostgreSQL function using sequelize.query()
// //       const results = await sequelize.query(
// //         "SELECT * FROM manage_project(:f_action, :f_projectid, :f_projectname, :f_startdate, :f_enddate, :f_projectmanager, :f_budget, :f_status, :f_description)",
// //         {
// //           replacements: {
// //             f_action: "D",
// //             f_projectid: id, // Ensure correct casing and existence of ProjectId
// //             f_projectname: ProjectName || null,
// //             f_startdate: StartDate ? new Date(StartDate) : null,
// //             f_enddate: EndDate ? new Date(EndDate) : null,
// //             f_projectmanager: ProjectManager || null,
// //             f_budget: Budget || null,
// //             f_status: Status || null,
// //             f_description: Description || null,
// //           },
// //           type: QueryTypes.SELECT,
// //         }
// //       );
// //       res.status(200).json(results);
// //       console.log("Result:", results);
// //     } catch (error) {
// //       console.error("Error:", error);
// //       res.status(500).json({ error: "Internal Server Error" });
// //     }
// //   });
  
// module.exports = router;
