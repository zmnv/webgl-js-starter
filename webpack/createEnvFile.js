const fs = require('fs');
const path = require('path');

fs.writeFile(path.resolve(__dirname, '../.env'), 'HEN_CREATOR=tz777\nHEN_EDITOR=', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
