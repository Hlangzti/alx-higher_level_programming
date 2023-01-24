#!/usr/bin/node
/* Opens a file and prints its contents, else print error */

const filename = process.argv[2];
const { readFile } = require('fs');

readFile(filename, 'utf-8', (error, text) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(text);
});
