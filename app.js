
const inquirer = require("inquirer");

// const axios = require("axios");








function promptUser() {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What is your role?",
      choices: [
        "Manager",
        "Intern",
        "Engineer",
        "Employee",
      ]
    },
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
    {
      type: "input",
      name: "username",
      message: "What is your github username?"
    }

  ]);
}


 





   




async function init() {

  try {
    //answers = answers you get after prompt user is ran
    const answers = await promptUser();
    // makeCall(answers)
console.log(answers)

  } catch (err) {
    console.log(err);
  }
}

init();
