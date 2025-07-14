const fs = require('fs');

// Write "Hello Node" to welcome.txt
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read from hello.txt and log it
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});
