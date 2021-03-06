var mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "emp_mang_db"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });

  inquirer.prompy([
    {
      type: "list",
      name: "actionChoice",
      message: "What do you want to view?",
      choices: ["Roles", "Departments", "Employees"],
      default: "Employees"
    }
  ]).then(function (res) {
    if (res.actionChoice === "Roles"){
      inquirer.prompt([{
        type: "list",
        name: "action",
        message: "What do you want to do",
        choices: ["Add Role", "Delete Role", "View Roles"],
        default: "Employees"
      }]).then(function (res){
        if (res.action === "Add Role"){
          
        }
      })
    }
  })