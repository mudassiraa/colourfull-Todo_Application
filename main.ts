#! /usr/bin/env node
import inquirer  from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;
console.log(chalk.bgBlueBright.bold.italic("\n \t Wellcome to code with me Todo-List Application\n"))
while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message:chalk.yellowBright("Enter your new task :")
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.yellowBright.bold.italic(`${addTask.task} Task Added in Todo-List successfully`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message:chalk.yellow( "Do you want to add more task ?"),
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore
}
    console.log("Your updated Todo-List:" ,  todoList);
    