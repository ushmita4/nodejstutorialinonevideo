const fs = require('fs');
//fs.readFile('file.txt', 'utf8', (err, data) => {
  //  console.log(err,data)
//});
const a=fs.readFileSync('file.txt');
console.log(a.toString());
console.log("Finished reading file.txt");
//file.txt and utf 8 will print the file naturally whereas this is the way to read the file without any hesitation
//fs.writeFile('file2.txt', 'Hello World', ()=> {
   
  //  console.log('Written to file file2.txt');
//})
const b=fs.writeFileSync('file2.txt', 'Hello World2');

console.log("Finished writing file2.txt");