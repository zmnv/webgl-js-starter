const fs = require('fs');
const Path = require('path');
const archiver = require('archiver');
const chalk = require('chalk');

const sourcePath = Path.resolve(__dirname, '../archive');
const outputFilePath = Path.resolve(sourcePath, 'archive.zip');

if (!fs.existsSync(sourcePath)){
    fs.mkdirSync(sourcePath);
}

var output = fs.createWriteStream(outputFilePath);
var archive = archiver('zip');

output.on('close', function () {
    console.log(chalk.bold.greenBright`Archived to:`, outputFilePath);
    console.log(archive.pointer() + ' total bytes.');
    console.log('');
    console.log(chalk.bold.cyanBright`Y-e-e-e-a-a-h-h! Now you can MINT your OBJKT at HEN ;)`);
    console.log('');
});

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);

archive.directory(Path.resolve(__dirname, '../build'), false);

archive.finalize();
