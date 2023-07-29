const fs = require('fs/promises');
const process = require('process');

const firstArg = process.argv[2];

// how to read a file

// let fileData;
async function getFileContent() {
    const fileData = await fs.readFile('test.txt', 'utf8');
    console.log(fileData);
}

getFileContent();

fs.readFile(firstArg, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// how to write a file
const content = 'Some content!';

fs.writeFile('demo/test.txt', content, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});