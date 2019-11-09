/* eslint import/no-extraneous-dependencies: 0 */

const inquirer = require("inquirer");
const { execSync } = require("child_process");

const stdio = [0, 1, 2];

const buildTypeQuestion = [{
    type: "list",
    name: "buildType",
    message: "Select NODE environment.",
    choices: ["Production", "Development"],
    filter(val) {
        return val.toLowerCase();
    },
}];

inquirer.prompt(buildTypeQuestion).then((answers) => {
    if (answers.buildType === "production") {
        const options = { stdio };
        execSync("npm run build", options);
    } else {
        const options = { env: Object.assign({}, process.env, { NODE_ENV: answers.buildType }), stdio };
        execSync("npm run start:dev", options);
    }
});
