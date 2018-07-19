const express = require('express')
const app = express();
var path = require('path');
app.use('/assets', express.static('public/assets'));

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.sendFile(path.join(__dirname + '/public/assets/index.html'));
});

app.listen(8888, () => {
  console.log('Example app listening on port 8888!')
});
