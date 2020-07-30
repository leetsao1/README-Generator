// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const { table } = require("console");
const { constants } = require("buffer");
const generateMarkdown = require("./utils/generateMarkdown");
const licenseDesc = require("./utils/license");

  inquirer
    .prompt([
      {
      type: "input",
      message: "Project name:",
      name: "name"
      },
      {
      type: "input",
      message: "Project version:",
      name: "version"
      },
      {
      type: "input",
      message: "Project description:",
      name: "description"
      },

      {
      type: "input",
      message: "Project homepage:",
      name: "url"
      },

      {
      type: "input",
      message: "Installation instructions:",
      name: "installation"
      },

      {
      type: "input",
      message: "How to use:",
      name: "usage"
      },

      {
      type: "list",
      message: "License:",
      name: "license",
      choices: ["APACHE", "GPL", "MIT", "Do What The F*ck You Want To Public License (WTFPL)"]
      },

      {
      type: "input",
      message: "Contribution Guidelines:",
      name: "contribution"
      },

      {
      type: "input",
      message: "Test Instructions:",
      name: "test"
      },

      {
      type: "input",
      message: "Questions:",
      name: "questions"
      },
      {
      type: "input",
      message: "Enter your Github username:",
      name: "username"
      },

    ])
    .then(function(response){
      let queryURL = `https://api.github.com/users/${response.username}/repos?per_page=100`;
      axios.get(queryURL).then(function(res) {
        console.log(res.data[0].owner.html_url);
        let githubURL = res.data[0].owner.html_url;
        writeToFile('README-test.md', response, licenseDesc, githubURL );

      });

      console.log ("README successfully created!")

    }).catch(function(error){
      console.log ("There was an error when generating this file. The error was: " + error)
    });

// function to write README file
function writeToFile(fileName, data, license, githubURL) {
   fs.writeFileSync(fileName, generateMarkdown(data,license , githubURL),"utf8", function (err){
    if (err) throw err;
    console.log ('Read me was created');
    })
}





