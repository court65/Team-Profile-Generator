const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const allEmployees = [];

function init() {
  //creating function to call at end of each questionare
  createTeam();
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Which employee position will you be adding?",
          name: "addEmployee",
          choices: ["Manager", "Engineer", "Intern", "Team is complete!"],
        },
      ])
      .then((userInput) => {
        switch (userInput.addEmployee) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
        }
      });
  }
    
 // Enter Manager Information   
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the manager's name?",
          name: "managerName",
        },
        {
          type: "input",
          message: "Please input your manager's ID.",
          name: "managerId",
        },
        {
          type: "input",
          message: "What is your manager's email?",
          name: "managerEmail",
        },
        {
          type: "input",
          message: " What is the manager's office number?",
          name: "officeNumber",
        },
      ])
      .then((data) => {
        const manager = new Manager(
          data.managerName,
          data.managerId,
          data.managerEmail,
          data.officeNumber
        );
        allEmployees.push(manager);
        createTeam();
      });
  }

  // Add Engineer Information
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Engineer's name?",
          name: "EngineerName",
        },
        {
          type: "input",
          message: "Please input the engineer's ID.",
          name: "managerId",
        },
        {
          type: "input",
          message: "What is the Engineer's email?",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "What is the engineer's GitHub address?",
          name: "officeNumber",
        },
      ])
      .then((data) => {
        const manager = new Manager(
          data.managerName,
          data.managerId,
          data.managerEmail,
          data.officeNumber
        );
        allEmployees.push(manager);
        createTeam();
      });
  }

  // Add Intern Information
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the name of the intern?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's ID?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the email address of the intern?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school did/does the intern attend?",
        },
      ])
      .then((data) => {
        const intern = new Intern(
          data.internName,
          data.internId,
          data.internEmail,
          data.internSchool
        );
        allEmployees.push(intern);
        createTeam();
      });
  }
}

