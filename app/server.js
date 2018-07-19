const express = require('express')
const app = express();
var path = require('path');
app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.sendFile(path.join(__dirname + '/index.html'));
});
console.log(111)
app.listen(8888, () => {
  console.log('Example app listening on port 8000!')
});
