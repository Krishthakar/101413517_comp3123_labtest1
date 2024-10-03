const fs = require('fs');  // Load the filesystem module to interact with files
const path = require('path');  // Load the path module to work with file and directory paths

// Define the path to the "Logs" directory
const logsDir = path.join(__dirname, 'Logs');

// Check if the "Logs" directory exists. If not, create it.
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);  // Create the "Logs" directory
  console.log('Logs directory created.');  // Notify that the directory was created
}

// Move into the "Logs" directory to make it the current working directory
process.chdir(logsDir);

// Create 10 log files, naming them log0.txt to log9.txt
for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;  // Define the name of the log file
  fs.writeFileSync(fileName, `This is log file ${i}`);  // Write some text inside the file
  console.log(fileName);  // Output the name of the file that was created
}
