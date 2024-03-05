import chalk from 'chalk';
// const { readFileSync } = require('node:fs');
import { readFileSync } from 'node:fs';

function main(){
    console.log(chalk.blue('Hello world!'));
    const data = readFileSync('./config.json');
    console.log(JSON.parse(data));
}

main();