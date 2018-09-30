// var fs = require("fs");

// //Given Node's File System documentation, write a command line program that reads a file and prints its contents to standard output.

// var userInput = process.argv.slice(2);

// fs.readFile(userInput[0], function (err, data) {
//   if (err) {
//      return console.error(err);
//   }
//   console.log("Asynchronous read: " + data.toString());
// });

// //node read_file.js /tmp/test_async.txt

var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('./tmp/index.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

// Create a writable stream
var writerStream = fs.createWriteStream('/.tmp/output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");