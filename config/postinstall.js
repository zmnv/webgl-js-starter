const chalk = require('chalk');
const createEnvFile = require('./createEnvFile');

createEnvFile(() => {
    console.log(chalk.bold.cyanBright`Y-e-e-e-a-a-h-h! Now you can use:`);
    console.log('> npm start         Start development server (localhost)');
    console.log('> npm start:local   Start development server (local network, host = internal ip)');
    console.log('> npm lint          Check syntax');
    console.log('> npm run build     Build production files');
    console.log('');
    console.log('Check README.MD file for more information. Good luck!');
    console.log('');
});


