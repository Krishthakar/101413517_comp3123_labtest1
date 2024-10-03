const fs = require('fs');  // Import the filesystem module to work with files
const path = require('path');  // Import the path module to manage file paths

// Define the path to the "Logs" directory
const logsDir = path.join(__dirname, 'Logs');

// Check if the "Logs" directory exists
if (fs.existsSync(logsDir)) {

  // Read all the files in the "Logs" directory
  fs.readdirSync(logsDir).forEach(file => {
    const filePath = path.join(logsDir, file);  // Get the full path of the file

    // Print a message indicating which file is being deleted
    console.log(`delete files...${file}`);

    // Delete the file from the directory
    fs.unlinkSync(filePath);
  });

  // After all files are deleted, remove the "Logs" directory itself
  fs.rmdirSync(logsDir);

  // Confirm that the directory has been removed
  console.log('Logs directory removed.');
} else {
  // If the "Logs" directory doesn't exist, print a message
  console.log('Logs directory does not exist.');
}
