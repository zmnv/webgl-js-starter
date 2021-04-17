const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = function createEnvFile(cb) {
    const filePath = path.resolve(__dirname, '../.env');
    fs.writeFile((filePath), 'HEN_CREATOR=tz777\nHEN_VIEWER=false', function (err) {
        if (err) throw err;

        console.log(chalk.greenBright.bold`Environment file was created:`);
        console.log(filePath);
        console.log('');

        if (cb) cb();
    });
}


