const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const allEmployees = [];

function init() {
    //creating function to call at the end of each questionare
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