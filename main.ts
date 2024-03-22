#! /usr/bin/env node
import inquirer from "inquirer";

const answer = [
    {
        message:"Enter your Weight(kg)",
        type:"number",
        name:"weight",
    },
    {
        message:"Enter your Height(m)",
        type:"number",
        name:"height",

}]

const calculateBMI = (weight:number, height:number): number=> weight/(height*height);

const main = async() => {
    const{weight,height} = await inquirer.prompt(answer);
    console.log (`Bmi: ${calculateBMI(weight,height).toFixed(2)}`)
};

main();